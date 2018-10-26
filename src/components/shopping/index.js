import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Shopping = (props) => (
  <div style={{ textAlign: 'center', marginTop: '100px' }}>
    <img style={{ width: '60px' }} src={props.images}/>
    <p>{props.context}</p>
  </div>
)

Shopping.defaultProps = {
  images: require('./img.png'),
  context: '暂无内容',
}
Shopping.propTypes = {
  images: PropTypes.string,
  context: PropTypes.string,
}

export default Shopping
