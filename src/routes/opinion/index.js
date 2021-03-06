import { Component } from 'react';
import { createForm } from 'rc-form';
import { connect } from 'dva';
import Nav from 'components/nav';
import {
  List,
  InputItem,
  TextareaItem,
  Button,
  Toast,
  WhiteSpace,
} from 'components';
import styles from './index.less';


const PrefixCls = 'opinion';

class Opinion extends Component {
  changeValue = (obj) => {
    for (let i in obj) {
      if (typeof (obj[i]) === 'string') {
        obj[i] = replaceSystemEmoji(obj[i]);
      }
    }
    return obj;
  };
  
  onSubmit = (isPatry) => {
    console.log(isPatry);
    this.props.form.validateFields({
      force: true,
    }, (error) => {
      if (!error) {
        const data = {
          ...this.props.form.getFieldsValue(),
        };
        if (isPatry) {
          this.props.dispatch({
            type: 'opinion/sendPatryOpinion',
            payload: {
              ...data
            },
          });
        } else {
          this.props.dispatch({
            type: 'opinion/sendOpinion',
            payload: {
              ...data
            },
          });
        }
      } else {
        Toast.fail('意见必须输入');
      }
    });
  };
  
  render () {
    const { name = '请示反馈', isPatry = false } = this.props.location.query,
      { getFieldProps, getFieldError } = this.props.form;
    
    return (
      <div>
        <Nav title={name} dispatch={this.props.dispatch} hasShadow={true}/>
        <div className={styles[`${PrefixCls}-outer`]}>
          <div className={styles[`${PrefixCls}-outer-title`]}>您有什么问题或建议想对我们说？</div>
          <form>
            <List.Item className={styles[`${PrefixCls}-outer-content`]}>
              <TextareaItem
                {...getFieldProps('content', {
                  initialValue: '',
                  rules: [{ required: true, message: '请输入您的意见' }],
                })}
                rows={10}
                placeholder={'您的宝贵意见，就是我们进步的源泉'}
              />
            </List.Item>
            <div className={styles[`${PrefixCls}-outer-button`]}>
              <Button type="ghost" onClick={this.onSubmit.bind(this, isPatry)}>提交</Button>
            </div>
          </form>
          <div className={styles[`${PrefixCls}-outer-footer`]}>
            (*^_^*)欢迎为我们提出宝贵的意见或建议
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ loading, opinion }) => ({
  loading,
  opinion,
}))(createForm()(Opinion));
