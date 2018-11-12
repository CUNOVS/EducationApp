/* eslint-disable one-var,one-var-declaration-per-line,import/first */
import React from 'react';
import PropTypes from 'prop-types';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { Layout, WhiteSpace, Icon, List } from 'components';
import styles from './index.less';
import { getLocalIcon } from 'utils';
import { commonRow } from 'components/row';
import { handleLessonClick, handleGridClick, handlerCommonClick } from 'utils/commonevents';
import Banner from 'components/banner/index';
import Notice from 'components/noticebar/index';
import HotCourse from 'components/hotCourse/index';
import CarouselGrid from 'components/carouselgrid';
import TitleBox from 'components/titlecontainer/index';
import SpecialBox from 'components/specialbox/index';
import Container from 'components/container/index';
import InfoBox from 'components/infobox/index';
import CardSilder from 'components/swipers/index';
import SearchHeader from 'components/searchheader';

const PrefixCls = 'dashboard',
  Item = List.Item;

const Dashboard = ({ dashboard, loading, dispatch, app }) => {
  const { BaseLine } = Layout,

    { bannerDatas, listData, specialData, hotBannerDatas, infoDatas, cardSilderDatas, carouseDatas, bannerNotice } = dashboard;

  const shopping = () => {
      dispatch(routerRedux.push({
        pathname: '/shoppings',
      }));
    },
    search = () => {
      dispatch(routerRedux.push({
        pathname: '/search',
      }));
    },
    curriculum = () => {
      dispatch(routerRedux.push({
        pathname: '/enterOf',
      }));
    },
    moreMessage = () => {
      dispatch(routerRedux.push({
        pathname: '/moreMessage',
        query: {
          name: '通知',
        },
      }));
    };
  return (
    <div className={styles[`${PrefixCls}-outer`]}>
      <div className={styles[`${PrefixCls}-top`]}>
        <SearchHeader
          dispatch={dispatch}
          placeholder="搜索"
          children={<Icon
            type={getLocalIcon('/components/shopping.svg')}
            onClick={shopping}
          />}
          Click={search}
        />
        <div>
          {bannerDatas.length > 0 &&
          <Banner bannerDatas={bannerDatas} handleClick={handleLessonClick.bind(null, dispatch)} />}
        </div>
      </div>
      <Notice banner={bannerNotice} messageL={moreMessage} />
      <WhiteSpace size="xs" />
      <CarouselGrid datas={carouseDatas} dispatch={dispatch} handleClick={handleGridClick} />
      <WhiteSpace size="xs" />
      <HotCourse
        bannerDatas={hotBannerDatas} dispatch={dispatch}
        handleClick={handleLessonClick.bind(null, dispatch)} />
      <WhiteSpace size="xs" />
      <Container
        title="新课推荐"
        handlerClick={handlerCommonClick.bind(null, '新课推荐', dispatch)}
        children={infoDatas && infoDatas.map((data, i) => {
          return <InfoBox key={i} {...data} handleClick={handleLessonClick.bind(null, dispatch)} />;
        })}
      />
      <WhiteSpace size="xs" />
      <TitleBox title="合作学校" />
      <CardSilder datas={cardSilderDatas} />
      <WhiteSpace size="xs" />
      <TitleBox title="猜你喜欢" handlerClick={handlerCommonClick.bind(null, '猜你喜欢', dispatch)} />
      <List className={styles[`${PrefixCls}-list`]}>
        {
          listData && listData.map((data, i) => {
            return (
              commonRow(data, handleLessonClick.bind(null, dispatch))
            );
          })
        }
      </List>
      <WhiteSpace size="xs" />
      <TitleBox title="专题课程" handlerClick={handlerCommonClick.bind(null, '专题课程', dispatch)} />
      <div className={styles[`${PrefixCls}-special`]}>
        {
          specialData && specialData.map((data, i) => {
            return <SpecialBox key={i} {...data} handleClick={handleLessonClick.bind(null, dispatch)} />;
          })
        }
      </div>
      <BaseLine />
    </div>
  );
};

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
};

export default connect(({ dashboard, loading, app }) => ({ dashboard, loading, app }))(Dashboard);
