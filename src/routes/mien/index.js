/*WKC
教师风采列表*/
import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'components/nav'
import TitleBox from 'components/titlecontainer'
import { exhibition } from 'components/row'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'

class Mien extends React.Component {
    constructor(props){
        super(props)
    } 
    
    Click = (dispatch) => {
    	dispatch(routerRedux.push({
    		pathname:'/mienDetails'
    	}))
    }
   
    render(){
    	const { data } = this.props.mien
    	const { name='' } = this.props.location.query
        return(
        	<div>
	        	<Nav title={name} dispatch={this.props.dispatch}/>
	            <div dispatch={this.props.dispatch} onClick={this.Click.bind(this,this.props.dispatch)}>
	                {exhibition(data)}
	            </div>
            </div>
        )
    }
}


export default connect(({ mien }) => ({
    mien
}))(Mien )