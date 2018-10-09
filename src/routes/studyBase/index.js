import React from 'react';
import { connect } from 'dva';
import Nav from 'components/nav';
import UserInfo from 'components/userInfo';
import { WhiteSpace, Grid, List, Icon, Layout } from 'components';
import TitleContainer from 'components/titlecontainer/index';
import { getLocalIcon, handleBuildingClick } from 'utils';
import Rate from 'rc-rate';
import '../../../node_modules/rc-rate/assets/index.css';
import styles from './index.less';

const PrefixCls = 'studybase';

function StudyBase ({ location, dispatch, studyBase }) {
  const { name = '学习空间' } = location.query, 
    { gridDatas, listData } = studyBase, 
    Item = List.Item, 
    Brief = Item.Brief;
  const { BaseLine } = Layout;

  return (
    <div className={styles[`${PrefixCls}-outer`]}>
      <Nav title={name} dispatch={dispatch} />
      <div>
        <UserInfo />
        <Grid data={gridDatas} activeStyle={false} onClick={handleBuildingClick.bind(null, dispatch)} />
        <WhiteSpace size="xs" />
        <TitleContainer title="最近学习" />
        <List className={styles[`${PrefixCls}-list`]}>
          {
            listData && listData.map((data) => {
              return (<div className={styles[`${PrefixCls}-list-item`]}>
                <div className={styles[`${PrefixCls}-imgbox`]}>
                  <img src={data.image} alt="" />
                  <div className={styles[`${PrefixCls}-imgbox-mask`]}>
                    {`已学:${data.time}`}
                  </div>
                </div>
                <div className={styles[`${PrefixCls}-info`]}>
                  <div className={styles[`${PrefixCls}-info-title`]}>{data.title}</div>
                  <div className={styles[`${PrefixCls}-info-box`]}>
                    <div className={styles[`${PrefixCls}-info-box-item`]}>
                      <span><Icon type={getLocalIcon('/components/rmb.svg')} size="xxs" /></span>
                      <span>{data.price}</span>
                    </div>
                    <div className={styles[`${PrefixCls}-info-box-item`]}>
                      <span><Icon type={getLocalIcon('/components/people.svg')} size="xxs" /></span>
                      <span>{data.people}</span>
                    </div>
                  </div>
                  <div>
                    <span>评分：</span>
                    <Rate style={{ fontSize: '16px' }} defaultValue={4} />
                  </div>
                </div>
              </div>);
            })
          }
        </List>
      </div>
      <BaseLine />
    </div>
  );
}

export default connect(({ loading, studyBase }) => ({
  loading,
  studyBase,
}))(StudyBase);
