import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'components/nav'
import { connect } from 'dva'

class Moudle extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount () {}
      
    componentWillMount() {}     
    
    render(){
        return(
            <div>
                <Nav title={name} dispatch={this.props.dispatch}/>
            </div>
        )
    }
}

Moudle.propTypes = {
}

export default connect(({  }) => ({
    
}))( )