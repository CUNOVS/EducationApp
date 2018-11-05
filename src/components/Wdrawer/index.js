/*WKC
抽屉组件*/
import React from 'react'
import Nav from 'components/nav'
import { connect } from 'dva'
import { Carousel, WingBlank,List,Icon,WhiteSpace, Drawer, NavBar, Radio, Flex  } from 'antd-mobile';
import { getLocalIcon, handleBuildingClick } from 'utils'
import { routerRedux } from 'dva/router';
import RadioButton from 'components/radioButton'
import styles from './index.less'

const PrefixCls = 'Wdrawer',
		Item = List.Item
const RadioItem = Radio.RadioItem;

class Wdrawer extends React.Component {
  state = {
    open: false,
    value: 0,
    value1: 0,
    value2: 0,
  }
  onOpenChange = () => {
    this.setState({ open: !this.state.open });
  }
    onChange = (value) => {
    this.setState({
      value : value,
    });
  }; 
    onChange1 = (value) => {
    this.setState({
      value1 : value,
    });
  }; 
    onChange2 = (value) => {
    this.setState({
      value2 : value,
    });
  }; 
  goBack = () => {
    this.props.dispatch(routerRedux.goBack());
    if (typeof props.navEvent === 'function') {
      this.props.navEvent();
    }
  }
    render(){
	    const { value,value1,value2 } = this.state;

  
    const sidebar = (<div>
	    				<List className={styles[`${PrefixCls}-single`]}>
	    					<div className={styles[`${PrefixCls}-single-head`]}>方向</div>
					        {this.props.data1.map(i => (
						          <RadioButton key={i.value} yep={i.yep} Click={this.props.ClickT} label={i.label}>     
						          </RadioButton>
					        ))}
	      				</List>
	      				<List className={styles[`${PrefixCls}-single`]}>
	      					<div className={styles[`${PrefixCls}-single-head`]}>方向</div>
					        {this.props.data1.map(i => (
						          <RadioItem style={{borderBottom:'1PX solid #ddd',margin:'0 5px'}} key={i.value} checked={value1 === i.value} onChange={() => this.onChange1(i.value)}>
						            {i.label}
						          </RadioItem>
					        ))}
	      				</List>
	      				<List className={styles[`${PrefixCls}-single`]}>
	      					<div className={styles[`${PrefixCls}-single-head`]}>方向</div>
					        {this.props.data2.map(i => (
						          <RadioItem style={{borderBottom:'1PX solid #ddd',margin:'0 5px'}} key={i.value} checked={value2 === i.value} onChange={() => this.onChange2(i.value)}>
						            {i.label}
						          </RadioItem>
					        ))}
	      				</List>
      				</div>);
    	
        return(
            <div>
		      <NavBar leftContent={<Icon type="left" />} rightContent={<Icon type="ellipsis" onClick={this.onOpenChange}/>}  onLeftClick={this.goBack}>
		      	{this.props.name}
		     </NavBar>
		      <Drawer
		        className={styles[`${PrefixCls}-my-drawer`]}
		        enableDragHandle
		        contentStyle={{ color: '#A6A6A6', textAlign: 'center' }}
		        sidebar={sidebar}
		        open={this.state.open}
		        onOpenChange={this.onOpenChange}
		      >
	            {this.props.child}
		      </Drawer>
            </div>
        )
    }
}

export default Wdrawer