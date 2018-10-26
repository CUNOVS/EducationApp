import React from 'react'
import ReactDOM from 'react-dom'
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