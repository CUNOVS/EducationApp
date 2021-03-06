import React from 'react';
import styles from './header.less';
import { Icon, Popover } from 'antd-mobile';
import { getLocalIcon } from 'utils';
import { routerRedux } from 'dva/router';

const PrefixCls = 'header',
  Item = Popover.Item;


class Header extends React.Component {
  state = {

  }


  handlerLogin () { // 登录
    this.props.dispatch(
      routerRedux.push({
        pathname: 'login',
      }),
    );
  }

  handlerGoMine () { // 退出登录
    this.props.dispatch(
      routerRedux.push({
        pathname: '/mine',
      }),
    );
  }

  renderLoginView (onClick) {
    return (
      <div onClick={onClick}>
        <Icon type={getLocalIcon('/dashboard/logined.svg')} size="lg" />
      </div>
    );
  }

  renderNotLoginView (onClick) {
    return (
      <div className={styles[`${PrefixCls}-notlogin`]} onClick={onClick}>
        <Icon type={getLocalIcon('/dashboard/login.svg')} size="lg" />
        登录
      </div>
    );
  }

  render () {
    const isLogin = this.props.isLogin;

    return (
      <div className={styles[`${PrefixCls}-logo-outer`]}>
        <div className={styles['logo-box']}>
          <img src={require('themes/images/logo.png')} alt="" />
          <span>
            {
              isLogin ? this.renderLoginView(this.handlerGoMine.bind(this)) : this.renderNotLoginView(this.handlerLogin.bind(this))
            }

          </span>
        </div>
      </div>
    );
  }
}

export default Header;

