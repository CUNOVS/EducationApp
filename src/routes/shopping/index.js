import React from 'react'
import Nav from 'components/nav'
import { connect } from 'dva'

class Shopping extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
    	const { title } = this.props.shopping;
    	console.log(title)
        return(
            <div>
                <Nav title={title} dispatch={this.props.dispatch}/>
            </div>
        )
    }
}

export default connect(({ shopping }) => ({
    shopping
}))( Shopping )