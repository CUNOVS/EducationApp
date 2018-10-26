/*WKC
我的课程页*/
import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'components/nav'
import styles from './index.less'
import { connect } from 'dva'
import Rate from 'rc-rate';
import { getLocalIcon, handleBuildingClick } from 'utils';
import { WhiteSpace, Grid, List, Icon, Layout } from 'components';
import { ActionSheet, WingBlank, Button, Toast } from 'antd-mobile';

const PrefixCls='listOfCourses';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class Courses extends React.Component {
    constructor(props){
        super(props);
	    this.state = {
	      clicked: 'none',
	    };
    }

  showActionSheet = () => {
    const BUTTONS = ['全部', '正在进行', '即将开始', '已结束', '报名下次开课','取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      // title: 'title',
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  } 
    render(){
    	const { gridDatas, listData } = this.props.courses,
    	      { name = '' } = this.props.location.query
        return(	
            <div>
                <Nav title={name} dispatch={this.props.dispatch}/>
                <div className={styles[`${PrefixCls}-Butt`]}>
                	<div>离线课程</div>
									<Button size='small' style={{border:'none',width:'20%'}}>前往</Button>
                </div>
                
                <WhiteSpace size='sm' />
                
                <div className={styles[`${PrefixCls}-Butt`]}>
                	<div>我的课程</div>
									<Button onClick={this.showActionSheet} size='small' style={{border:'none',width:'20%'}}>全部</Button>
                </div>
                
		        <List className={styles[`${PrefixCls}-list`]}>
		          {
		            listData && listData.map((data) => {
		              return (<div className={styles[`${PrefixCls}-list-item`]}>
		                <div className={styles[`${PrefixCls}-imgbox`]}>
		                  <img src={data.image} alt="" />
		                  <div className={styles[`${PrefixCls}-imgbox-mask`]}>
		                    {`已学:${data.time}`}
		                  </div>
		                </div>
		                <div className={styles[`${PrefixCls}-info`]}>
		                  <div className={styles[`${PrefixCls}-info-title`]}>{data.title}</div>
		                  <div>
		                    <span>评分：</span>
		                    <Rate style={{ fontSize: '16px' }} defaultValue={4} />
		                  </div>
		                  <div className={styles[`${PrefixCls}-info-box`]}>
							<div className={styles[`${PrefixCls}-info-box-item`]} >

								继续学习
							</div>
		                  </div>
		                </div>
		              </div>);
		            })
		          }
		        </List>
            </div>
        )
    }
}

export default connect(({ courses }) => ({
    courses
}))(Courses )
