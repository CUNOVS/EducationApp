import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { hotRankingRow } from 'components/row';
import styles from './index.less';
import TransparentHeader from 'components/transparentheader';
import { getOffsetTopByBody, getLocalIcon } from 'utils';
import { WhiteSpace, Icon, List } from 'components';
import bg from './back.png';

const PrefixCls = 'hotranking';

class HotRanking extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tabOffset: 0,
    };
  }

  componentDidMount () {

  }

  render () {
    const { dataList } = this.props.hotranking;
    return <div style={{ background: '#fff' }}>
      <TransparentHeader dispatch={this.props.dispatch} offset={this.state.tabOffset} />
      <div className={styles[`${PrefixCls}-outer`]} style={{ backgroundImage: `url(${bg})` }} />
      <div className={styles[`${PrefixCls}-container`]}>
        <div className={styles[`${PrefixCls}-list`]}>
          {
            cnIsArray(dataList) && dataList.map((data, i) => {
              return hotRankingRow(data);
            })
          }
        </div>
      </div>
    </div>;
  }
}


export default connect(({ hotranking }) => ({
  hotranking,
}))(HotRanking);
