/*WKC
这是课程列表页*/
import React from 'react'
import Nav from 'components/nav'
import { connect } from 'dva'
import { Carousel, WingBlank,List,Icon,WhiteSpace, Drawer, NavBar, Radio, Flex  } from 'antd-mobile';
import { getLocalIcon, handleBuildingClick } from 'utils'
import { handleListClick } from 'utils/commonevents'
import { routerRedux } from 'dva/router';
import Wdrawer from 'components/Wdrawer'
import styles from './index.less'

const PrefixCls = 'grid',
		Item = List.Item
const RadioItem = Radio.RadioItem;
const dataCop = [
	{ value: 0, label: '前端技术',id:0,yep:true },
	{ value: 1, label: '前端开发',id:1,yep:false },
	{ value: 2, label: '后端开发',id:2,yep:false },
	{ value: 3, label: '移动开发',id:3,yep:false },
]

class Curriculum extends React.Component {  
    Click = () => {
    	this.props.dispatch(routerRedux.push({
    		pathname:'/enterOf',
    		query:{
    			name:'在线报名'
    		}
    	}))
    }
    ClickT = (data,dispatch) => {
    	console.log(data.yep)
    	dispatch({
		    type: 'products/delete',
		    payload: dataCop,
	    });
	    console.log(data.yep)
    }    
    render(){
    	const {hot,listData,data,data1,data2 } = this.props.curriculum
    	const { name='' } = this.props.location.query
  		console.log(data)
    const sidebar = (<List className={styles[`${PrefixCls}-list`]} >
				        {
				          listData && listData.map((data, i) => {
				            return (
				              <Item
				                key={i}
				                thumb={data.image}
				                multipleLine
				                wrap
				                onClick={handleListClick.bind(this,data,this.props.dispatch)}
				              >
				                <span> {data.title}</span>
				                <div className={styles[`${PrefixCls}-list-info`]}>
				                  <div className={styles[`${PrefixCls}-list-info-box`]}>
				                    <span><Icon type={getLocalIcon('/components/rmb.svg')} size="xxs"/></span>
				                    <span>{data.price}</span>
				                  </div>
				                  <div className={styles[`${PrefixCls}-list-info-box`]}>
				                    <span><Icon type={getLocalIcon('/components/people.svg')} size="xxs"/></span>
				                    <span>{data.people}</span>
				                  </div>
				                </div>
				              </Item>
				            )
				          })
				        }
	            </List>);
    	
        return(
            <div>
		      <Wdrawer ClickT={this.ClickT.bind(this,data,this.props.dispatch)} child={sidebar} dispatch={this.props.dispatch} data={data} data1={data1} data2={data2} name={name}/>
            </div>
        )
    }
}

export default connect(({ curriculum }) => ({
    curriculum
}))( Curriculum)
