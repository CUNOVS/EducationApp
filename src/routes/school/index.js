
import { connect } from 'dva';
import Nav from 'components/nav';
import { Modal, WhiteSpace } from 'components';
import Tile from 'components/tile';
import styles from './index.less';
import { handleLessonClick, handleGridClick } from 'utils/commonevents'

const PrefixCls = 'school';

function School ({ location, dispatch, school }) {
  const { datas } = school;
  return (
    <div>
      <div className={styles[`${PrefixCls}-head`]}>
        <img src={require('../../themes/images/school/schoolbg.png')} alt="" />
      </div>
      <WhiteSpace />
      <div>
        <Tile items={datas} dispatch={dispatch} handleClick={handleGridClick}/>
      </div>
    </div>
  );
}

export default connect(({ loading, school }) => ({
  loading,
  school,
}))(School);
