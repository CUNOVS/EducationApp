import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import classNames from 'classnames'
import styles from './index.less';

const PrefixCls = 'nav';

function Nav (props) {
  const goBack = () => {
    props.dispatch(routerRedux.goBack());
    if (typeof props.navEvent === 'function') {
      props.navEvent();
    }
  };
  return (
    <div>
      <div className={classNames(styles[`${PrefixCls}-header-box`],{[styles.shadow]:props.hasShadow})}>
        <div className={styles[`${PrefixCls}-header`]}>
          <NavBar
            style={{ background: props.color }}
            leftContent=""
            onLeftClick={goBack}
            mode="light"
            icon={<Icon type="left" color='#000'/>}
            rightContent={props.renderNavRight}
          >{props.title}</NavBar>
        </div>
      </div>
    </div>
  );
  Static.propTypes = {
    dispatch: PropTypes.func.isRequired,
    renderNavRight: PropTypes.func.isRequired,
  };
  Static.defaultProps = {
    renderNavRight: null,
    title: '',
    color: '#fff',
    navEvent: null,
    hasShadow:false
  };
}
export default Nav;
