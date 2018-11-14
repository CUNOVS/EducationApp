/**
 * @author Lowkey
 * @date 2018/11/14 14:27:40
 * @Description:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TransparentHeader from 'components/transparentheader';
import TitleBox from 'components/titlecontainer';
import Container from 'components/container/index';
import InfoBox from 'components/infobox/index';
import InnerHtml from 'components/innerhtml';
import { getOffsetTopByBody } from 'utils';
import { connect } from 'dva';
import styles from './index.less';

const PrefixCls = 'facechatdetails';

class FaceChatDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }

  componentDidMount () {
    const element = ReactDOM.findDOMNode(this.offset);
    this.setState({
      offset: getOffsetTopByBody(element),
    });
  }

  render () {
    const { name = '' } = this.props.location.query,
      { data } = this.props.facechatdetails;
    return (
      <div>
        <TransparentHeader name={name} dispatch={this.props.dispatch} offset={this.state.offset} />
        <div className={styles[`${PrefixCls}-head`]}>
          <div className={styles[`${PrefixCls}-back`]} style={{ backgroundImage: `url(${data.img})` }} />
          <div className={styles[`${PrefixCls}-back-content`]}>
            <div className={styles[`${PrefixCls}-back-content-title`]}>
              {data.title}
            </div>
            <div className={styles[`${PrefixCls}-back-content-founder`]}>
              {`创建人:${data.founder}`}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ facechatdetails }) => ({
  facechatdetails,
}))(FaceChatDetails);
