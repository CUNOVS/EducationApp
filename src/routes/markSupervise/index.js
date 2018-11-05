import React from 'react'
import Nav from 'components/nav'
import { connect } from 'dva'
import { List,Icon } from 'antd-mobile'
import styles from './index.less'
import classNames from 'classnames'
import { routerRedux } from 'dva/router'

const PrefixCls = 'markSupervise'
const Item = List.Item,
		Brief = Item.Brief;
const banner = [
	{name:'姓名',title:"科目",connect:'成绩',date:'时间'},
	{name:'姓名',title:"科目",connect:'成绩',date:'时间'}
]

class MarkSupervise extends React.Component {
    constructor(props){
        super(props)
    }   
    
    Click = (dispatch) => {
		dispatch(routerRedux.push({
			pathname:'/markDetails'
		}))				
	}
    render(){
    	const { name='' } = this.props.location.query
        return(
            <div>
                <Nav title={name} dispatch={this.props.dispatch}/>
                <List>
                	{banner && banner.map((data,index) => (			
                		<div className={styles[`${PrefixCls}-sun`]} onClick={this.Click.bind(this,this.props.dispatch)}>
                			<div style={{flex:'80%'}}>
	                			<div className={classNames(styles[`${PrefixCls}-sun-one`],styles[`${PrefixCls}-sun-onee`])}>{data.name}</div>
	                			<div className={styles[`${PrefixCls}-sun-one`]} style={{color:'#a1a3a6'}}>{data.title}</div>
		                		<div className={styles[`${PrefixCls}-sun-two`]}>
		                			<div>{data.connect}</div>
		                			<div>{data.date}</div>
		                		</div>
	                		</div>
                			<div>
	                			<Icon type="right" size="lg"/>
	                		</div>
                		</div>
                	))
                	}
                </List>
            </div>
        )
    }
}


export default connect(({ markSupervise }) => ({
    markSupervise
}))(MarkSupervise)