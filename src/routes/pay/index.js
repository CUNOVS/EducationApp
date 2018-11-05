/*WKC
确定支付页*/
import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'components/nav'
import CarouselGrid from 'components/carouselgrid'
import TitleBox from 'components/titlecontainer/index'
import ReactDOM from 'react-dom'
import { connect } from 'dva'
import { routeredux } from 'dva/router'
import { List, Radio, Flex,Button,Card, WhiteSpace,NavBar, Icon,Badge } from 'antd-mobile';
import { getOffsetTopByBody } from 'utils'
import styles from './index.less'

const RadioItem = Radio.RadioItem;
const PrefixCls = 'pay';

class Pay extends React.Component {
		state = {
		    value: 0,
		    height:0
		} 
	onChange = (value) => {
	    this.setState({
	      value,
	    });
	};
	
    render(){
    	const { datas,curriculum } = this.props.pay,
    			{name=''} = this.props.location.query
		 const { value } = this.state;
		 
		 const W = curriculum.connect
		 const WKC = W.substr(0,40)
		console.log(WKC)
        return(
            <div className={styles[`${PrefixCls}-sun`]}>
				<Nav title={name} dispatch={this.props.dispatch}/>
				
				<Card className={styles[`${PrefixCls}-sun-card`]}>
			      <Card.Header title="商品信息" style={{fontSize:'0.28rem',fontWeight:'300'}}/>
			      <Card.Body className={styles[`${PrefixCls}-sun-One`]}>
			        <div><img src={curriculum.images} /></div>
			        <div className={styles[`${PrefixCls}-sun-One-chil`]} style={{width:'100%'}}>
			        	<div style={{flex:'100%'}} className={styles[`${PrefixCls}-sun-One-chil-chill`]}>{WKC}...</div>
			        	<div>¥ {curriculum.money}</div>
			        </div>
			      </Card.Body>
			    </Card>
				
				<Card className={styles[`${PrefixCls}-sun-card`]}>
				  <Card.Header title="选择支付方式" style={{fontSize:'0.28rem',fontWeight:'300'}}/>
				  <Card.Body style={{border:'none'}}>
				      <List style={{background:'white'}}>
				        {datas.map(i => (
				        <div>
				          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
				            <img src={i.images} style={{width:'0.75rem',height:'0.65rem'}}/>{i.label}
				          </RadioItem>
				        </div>
				        ))}
				      </List>
			      </Card.Body>
			    </Card>
			    
			    <div className={styles[`${PrefixCls}-sun-cards`]} >
			    	<div>
				    	<div>商品金额</div>
				    	<div style={{color:'red'}}>¥ {curriculum.money}</div>
			    	</div>
			    	<div style={{paddingTop:'0.2rem'}}>
					    <div>活动优惠</div>
					    <div style={{color:'red'}}>¥ -{curriculum.discount}</div>
				    </div>
			    </div>
				<div style={{height:'1rem'}}></div>
			    <div className={styles[`${PrefixCls}-sun-end`]}>
			    	<div style={{flex:'60%',background:'white'}}>实付 <span style={{color:'red'}}>¥{curriculum.money}</span></div>
			    	<div style={{flex:'40%',background:'red',color:'white'}}>提交订单</div>
			    </div>
            </div>
        )
    }
}

export default connect(({ pay }) => ({
    pay
}))(Pay )