/* WKC
教师风采列表 */
import React from 'react';
import Nav from 'components/nav';
import { exhibition } from 'components/row';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { getLocalIcon, handleBuildingClick, handleGridClick } from 'utils';
import styles from './index.less';

const PrefixCls = 'teachermien';

class TeacherMien extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { data } = this.props.teachermien,
      handlerClick = () => {
        this.props.dispatch(routerRedux.push({
          pathname: 'mienDetails',

        }));
      };
    return (
      <div className={styles[`${PrefixCls}-outer`]}>
        <Nav title='教师风采' dispatch={this.props.dispatch} />
        <div className={styles[`${PrefixCls}-outer-container`]}>
          {exhibition(data, handlerClick)}
        </div>
      </div>
    );
  }
}


export default connect(({ teachermien }) => ({
  teachermien,
}))(TeacherMien);
