import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'components/nav'
import CarouselGrid from 'components/carouselgrid'
import TitleBox from 'components/titlecontainer/index'
import { connect } from 'dva'

class Pay extends React.Component {
    constructor(props){
        super(props)
    }   
    
    render(){
    	const { datas } = this.props.pay,
    			{name=''} = this.props.location.query
        return(
            <div>
                <Nav title={name} dispatch={this.props.dispatch}/>
                <TitleBox title="购物车" sup=""/>
                <CarouselGrid datas={datas}/>
                <div style={{border:'solid 1px',borderRadius:"50px"}}>
                	<img src={require('../../themes/images/school/schoolbg.png')} alt="" />
                </div>
                <div>
                	应付金额:15
                </div>
                <div style={{border:'solid 1px',height:'0.5rem',width:'80%',background:'white'}}>
                	前去付款
                </div>
            </div>
        )
    }
}

export default connect(({ pay }) => ({
    pay
}))(Pay )