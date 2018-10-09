import React from 'react';
import { Carousel, WhiteSpace, WingBlank, Icon } from 'antd-mobile';
import PropTypes from 'prop-types';
import { getLocalIcon } from 'utils';
import styles from './index.less';

const PrefixCls = 'notice';
const Notice = (props) => (
  <div onClick={props.handleClick}>
    <div className={styles[`${PrefixCls}-box`]}>
      <Icon style={{ marginRight: '10px' }} type={getLocalIcon('/components/notice.svg')} />
      <Carousel className="my-carousel"
        vertical
        dots={false}
        dragging={false}
        swiping={false}
        autoplay
        infinite
      >
        <div className={styles[`${PrefixCls}-item`]}>新人注册专享35sdfgsdsd第三个发送到该发生地方噶水电费感受到发给元大礼包，你来我就送</div>
        <div className={styles[`${PrefixCls}-item`]}>通大量精选课程限时免费学习</div>
      </Carousel>
    </div>
  </div>
);
Notice.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default Notice;
