/* eslint-disable indent */
import React from 'react'
import { connect } from 'dva'
import { Button, Flex, WingBlank, WhiteSpace, List, Icon, Modal, Badge, Grid, Layout } from 'components'
import { getImages, getErrorImg, getLocalIcon, getDefaultBg } from 'utils'
import { routerRedux } from 'dva/router'
import { baseURL, api } from 'utils/config'
import styles from './index.less'

const PrefixCls = 'mine',
  { helpApi } = api,
  Item = List.Item,
  Brief = Item.Brief

function Mine ({ location, dispatch, mine, app, login }) {
  const name = '我的'
  const { users: { username, useravatar }, isLogin, noViewCount = 0 } = app,
    { gridDatas } = mine
  const handleLogin = () => {
      if (!isLogin) {
        dispatch(routerRedux.push({
          pathname: '/login',
        }))
      }
    },
    handleLoginout = () => {
      dispatch({
        type: 'app/logout',
      })
    },
    handleIntegralClick = () => {
      dispatch(routerRedux.push({
        pathname: '/integral',
      }))
    },
    handlePayClick = () => {
      dispatch(routerRedux.push({
        pathname: '/payment',
      }))
    },
    handleAppealClick = ({ showType = '2', name = '我的诉求' }) => {
      dispatch(routerRedux.push({
        pathname: '/myappeal',
        query: {
          showType,
          name,
        },
      }))
    },
    handleCollectionClick = ({ showType = '3', name = '我的收藏' }) => {
      dispatch(routerRedux.push({
        pathname: '/myappeal',
        query: {
          showType,
          name,
        },
      }))
    },
    handleHelpClick = ({ name = '帮助' }) => {
      dispatch(routerRedux.push({
        pathname: 'iframe',
        query: {
          name,
          externalUrl: baseURL + helpApi,
        },
      }))
    },
    handleopinionClick = ({ name = '意见反馈' }) => {
      dispatch(routerRedux.push({
        pathname: 'opinion',
        query: {
          name,
        },
      }))
    },
    handleTaskClick = ({ name = '守护阿拉善' }) => {
      dispatch(routerRedux.push({
        pathname: 'guard',
        query: {
          name,
        },
      }))
    },
    handleSetupClick = ({ name = '个人设置' }) => {
      dispatch(routerRedux.push({
        pathname: '/setup',
        query: {
          name,
        },
      }))
    },
    showAlert = () => {
      Modal.alert('退出', '离开我的阿拉善', [
        {
          text: '残忍退出',
          onPress: handleLoginout,
        },
        { text: '再看看', onPress: () => console.log('cancel') },

      ])
    },
    handleAboutUsClick = ({ name = '关于我们' }) => {
      dispatch(routerRedux.push({
        pathname: '/aboutus',
        query: {
          name,
        },
      }))
    }
  return (
    <div>
      <div className={styles[`${PrefixCls}-top`]} onClick={handleLogin}>
        <div className={styles[`${PrefixCls}-top-bg`]} style={{ backgroundImage: `url(${getDefaultBg('')})` }}>

        </div>
        <div className={styles[`${PrefixCls}-top-content`]}>
          <img src={getImages(useravatar, 'user')} alt=""/>
          <div className={styles[`${PrefixCls}-top-content-username`]}>登录/注册</div>
        </div>
      </div>
      <Grid data={gridDatas} hasLine={false} activeStyle={false}/>
      <WhiteSpace size="xs"/>
      <div className={styles[`${PrefixCls}-info`]}>
        <List>
          <Item
            thumb={<Icon type={getLocalIcon('/mine/shopcar.svg')}/>}
            arrow="horizontal"
          >
            我的购物车
          </Item>
          <Item
            thumb={<Icon type={getLocalIcon('/mine/opinion.svg')}/>}
            onClick={handleopinionClick}
            arrow="horizontal"
          >
            意见反馈
          </Item>
          <Item
            thumb={<Icon type={getLocalIcon('/mine/help.svg')}/>}
            arrow="horizontal"
          >
            使用帮助
          </Item>
          <Item
            thumb={<Icon type={getLocalIcon('/mine/aboutus.svg')}/>}
            arrow="horizontal"
            onClick={handleAboutUsClick}
          >
            关于我们
          </Item>
          <Item
            thumb={<Icon type={getLocalIcon('/mine/setup.svg')}/>}
            arrow="horizontal"
            onClick={handleSetupClick}
          >
            个人设置
          </Item>
        </List>
      </div>
    </div>
  )
}

export default connect(({ mine, app, login }) => ({
  mine,
  app,
  login,
}))(Mine)
