import React from 'react';
import { NavBar, Icon, Button, List } from 'antd-mobile';
import styles from './index.less';

const PrefixCls = 'purchase';

class Purchase extends React.Component{

	render(){
		let userMessage;
		if(this.props.judge){
			userMessage=(<div className={styles[`${PrefixCls}-butt-button`]}>立即参加</div>)
		}else{
			userMessage=(<div className={styles[`${PrefixCls}-butt-inHalf`]}>
					<div>加入购物车</div>
					<div>立即购买</div>
			</div>)
		}		
	return (
    <div className={styles[`${PrefixCls}-butt`]} judge={true} onClick={this.props.handleClick}>
      {userMessage}
    </div>
  )};
}
export default Purchase
