import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import PropTypes from 'prop-types';
import styles from './index.less'

const PrefixCls = 'shopp'

const Shopping = (props) => (
	<div className={styles[`${PrefixCls}-shopp`]}>
		<img src={props.images} />
		<p>{props.context}</p>
	</div>
)

Shopping.defaultProps = {
  images:require('./img.png'),
  context:"暂无内容"
};
Shopping.propTypes = {
   images: PropTypes.func,
   context: PropTypes.string
};

export default Shopping
=======
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
>>>>>>> c7fb6323691efa73fc999dd6ed2192f781e4544c
