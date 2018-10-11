import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'components/nav'

class Moudle extends React.Component {
    constructor{
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