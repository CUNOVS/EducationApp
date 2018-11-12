/* eslint-disable react/no-did-mount-set-state */
/* WKC
教师风采详情页
PersonConcern是关注列表
* */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TransparentHeader from 'components/transparentheader';
import TitleBox from 'components/titlecontainer';
import Container from 'components/container/index';
import InfoBox from 'components/infobox/index';
import InnerHtml from 'components/innerhtml';
import { getOffsetTopByBody } from 'utils';
import { connect } from 'dva';
import styles from './index.less';

const PrefixCls = 'mienDetails';

class MienDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }

  componentDidMount () {
    const element = ReactDOM.findDOMNode(this.offset);
    this.setState({
      offset: getOffsetTopByBody(element),
    });
  }

  render () {
    const { name = '个人主页' } = this.props.location.query,
      { data, lessonData } = this.props.mienDetails;
    return (
      <div>
        <TransparentHeader name={name} dispatch={this.props.dispatch} offset={this.state.offset} />
        <div className={styles[`${PrefixCls}-back`]} style={{ backgroundImage: `url(${data.img})` }}>
          <div className={styles[`${PrefixCls}-back-text`]}>
            <div className={styles[`${PrefixCls}-back-text-container`]}>
              <div>{data.name}</div>
              <div>{data.content}</div>
              <div>开课<span
                className={styles[`${PrefixCls}-back-text-container-tag`]}
              >
                {data.lessons}</span>
                门,已有
                <span
                  className={styles[`${PrefixCls}-back-text-container-tag`]}
                >
                {data.students}
              </span>
                人学习
              </div>
            </div>
            <div>
              <div className={styles[`${PrefixCls}-back-butt`]}>+关注</div>
            </div>
          </div>
        </div>
        <div ref={el => this.offset = el}><TitleBox title="个人履历" sup="" /></div>
        <div className={styles[`${PrefixCls}-info`]}><InnerHtml data={data.info} /></div>
        <Container
          title="相关课程"
          children={lessonData && lessonData.map((data, i) => {
            return <InfoBox key={i} {...data} />;
          })}
        />
      </div>
    );
  }
}

export default connect(({ mienDetails }) => ({
  mienDetails,
}))(MienDetails);
