import React from 'react';
import { routerRedux } from 'dva/router';
import PropTypes from 'prop-types';
import styles from './index.less';

const PrefixCls = 'container';

function Container (props) {
  return (
    <div className={styles[`${PrefixCls}-outer`]}>
      <div className={styles[`${PrefixCls}-outer-title`]}>
        <div>{props.title}</div>
        <span>更多></span>
      </div>
      <div className={styles[`${PrefixCls}-outer-children`]}>{props.children}</div>
    </div>
  );
}

Container.defaultProps = {
  title: ''
};
Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
};
export default Container;
