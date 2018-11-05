import React from 'react'
import Nav from 'components/nav'
import { connect } from 'dva'
import { noteRow } from 'components/row'
import { routerRedux } from 'dva/router'

class Note extends React.Component {
    constructor(props){
        super(props)
    }  
    Click = (dispatch) => {
		dispatch(routerRedux.push({
			pathname:'/jobList'
		}))
    }
    
    render(){
    	const { name='' } = this.props.location.query
    	const { listData } = this.props.note
        return(
            <div>
                <Nav title={name} dispatch={this.props.dispatch}/>
                { noteRow(listData,this.Click.bind(null,this.props.dispatch)) }
            </div>
        )
    }
}

export default connect(({ note }) => ({
    note
}))(Note)