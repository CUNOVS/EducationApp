import React from 'react'
import Nav from 'components/nav'
import { connect } from 'dva'

class MarkDetails extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
    	const { name='' } = this.props.location.query
        return(
            <div>
                <Nav title={name} dispatch={this.props.dispatch}/>
                <div>
                	考试内容
                </div>
            </div>
        )
    }
}

export default connect(({ markDetails }) => ({
    markDetails
}))(MarkDetails)