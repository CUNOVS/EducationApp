import React from 'react'
import Nav from 'components/nav'
import { connect } from 'dva'
import { Carousel, WingBlank,List,Icon,WhiteSpace, Drawer, NavBar, Radio, Flex,Calendar  } from 'antd-mobile';
import { getLocalIcon, handleBuildingClick } from 'utils'
import { handleListClick } from 'utils/commonevents'
import { routerRedux } from 'dva/router';
import Wdrawer from 'components/Wdrawer'
import styles from './index.less'

const PrefixCls = 'grid',
		Item = List.Item
const RadioItem = Radio.RadioItem;
const now = new Date();

class CreateTable extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
    
    Click =  () => {
    	this.setState({show:!this.state.show})
    }
    
    render(){
    	const {hot,listData,data,data1,data2 } = this.props.createTable
    	const { name='' } = this.props.location.query
  
			const child = (
				<div style={{color:'black',textAlign:"left",background:'white',padding:'0.2rem'}}>
					<div  style={{fontSize:'0.34rem',display:'flex',alignItems:'center'}}>
					<span onClick={this.Click} style={{flex:'30%'}}>请设置时间</span>
					<span style={{flex:'70%',fontSize:'0.28rem',fontWeight:'300'}}>当前时间:{now.getFullYear()}.{now.getMonth()+1}.{now.getDate()}</span>
					</div>
					<Calendar
						visible={this.state.show}
						onCancel={this.Click}
						onConfirm={this.Click}
						minDate={new Date(+now - 5184000000)}
	          			maxDate={new Date(+now + 31536000000)}
					/>
				</div>
			)
    	
        return(
            <div>
		      <Wdrawer child={child} dispatch={this.props.dispatch} data={data} data1={data1} data2={data2} name={name}/>
            </div>
        )
    }
}

export default connect(({ createTable }) => ({
    createTable
}))(CreateTable)
