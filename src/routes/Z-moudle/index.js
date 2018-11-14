import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'components/nav'
import { connect } from 'dva'
import InfoBox from '../../components/infobox';

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

InfoBox.defaultProps = {
  image: '',
  title: 'hxi',
  price: '免费',
  number: '212',
};
InfoBox.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default connect(({  }) => ({
    
}))( )
