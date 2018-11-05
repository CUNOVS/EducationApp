import React from 'react';
import { NavBar, Icon, Button, List,Toast } from 'antd-mobile';
import styles from './index.less';
import classNames from 'classnames'

const PrefixCls = 'purchase';

class Purchase extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      yep:'false',
      yes:'false',
    }
  }
	
	
	participant = () => {
	    this.setState({
	      yep: !this.state.yep
	    })
	    if(this.state.yep){
	    	Toast.success("加入成功",1);	    	
	    }
	}
	shopping = () => {
	    this.setState({
	      yep: !this.state.yep
	    })	
	    if(this.state.yes){
	    	Toast.success("加入成功",1);	    	
	    }
	}

	render(){
		let userMessage;
		if(this.props.judge){
			userMessage=(<div className={classNames(styles[`${PrefixCls}-butt-button`],{ [styles.back]: this.state.yep })}  onClick={this.participant.bind(this)}>{this.state.yep ? '立即参加' : '已成功加入'}</div>)
		}else{
			userMessage=(<div className={styles[`${PrefixCls}-butt-inHalf`]} >
					<div onClick={this.shopping.bind(this)}>加入购物车</div>
					<div onClick={this.props.Click.bind(this)}>立即购买</div>
			</div>)
		}		
	return (
    <div className={styles[`${PrefixCls}-butt`]}  >
      {userMessage}
    </div>
  )};
}
export default Purchase
