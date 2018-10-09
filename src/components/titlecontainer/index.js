import React from 'react';
import { List } from 'antd-mobile';
import PropTypes from 'prop-types';
import { routerRedux } from 'dva/router';
import styles from './index.less';

const PrefixCls = 'titlebox';

function TitleBox (props) {
  return (
    <List>
      <List.Item extra={props.sup}><span className={styles[`${PrefixCls}-title`]} />{props.title}</List.Item>
    </List>
  );
}
TitleBox.propTypes = {
  title: PropTypes.String,
  sup: PropTypes.String
};

TitleBox.defaultProps = {
  title: '',
  sup: '更多>',
};
export default TitleBox;
