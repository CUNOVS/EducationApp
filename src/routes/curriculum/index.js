/*WKC
这是课程列表页*/
import React from 'react'
import Nav from 'components/nav'
import { connect } from 'dva'
import { Carousel, WingBlank,List,Icon,WhiteSpace } from 'antd-mobile';
import { getLocalIcon, handleBuildingClick } from 'utils'
import { routerRedux } from 'dva/router';
import styles from './index.less'

const PrefixCls = 'grid',
		Item = List.Item,
		Brief = Item.Brief

class Curriculum extends React.Component {
    constructor(props){
        super(props)
    }
    
    Click = () => {
    	this.props.dispatch(routerRedux.push({
    		pathname:'/enterOf',
    		query:{
    			name:'在线报名'
    		}
    	}))
    }
    
    render(){
    	const {hot,listData} = this.props.curriculum
    	const { name='' } = this.props.location.query
        return(
            <div>
                <Nav title={name} dispatch={this.props.dispatch}/>
		        <Carousel
		          dots={false}
		          infinite
		          cellSpacing={10}
		          slideWidth={0.4}
		          style={{background:'white'}}
		        >
		          {hot && hot.map((data, i) => (
		            <div key={`a_${i}`} className={styles[`${PrefixCls}-grid`]}>
		              <div>{data}</div>
		            </div>
		          ))}
                </Carousel>
                <div style={{display: 'flex'}}>
		          {hot && hot.map((data, i) => (
		            <div key={`a_${i}`} style={{flex:'1',background: 'whitesmoke',height:'2px'}}>
		            </div>
		          ))}
                </div>
                <WhiteSpace size="sm"/>
                <List className={styles[`${PrefixCls}-list`]}>
			        {
			          listData && listData.map((data, i) => {
			            return (
			              <Item
			                key={i}
			                thumb={data.image}
			                multipleLine
			                wrap
			                onClick = {this.Click}
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
                </List>
            </div>
        )
    }
}

export default connect(({ curriculum }) => ({
    curriculum
}))( Curriculum)
