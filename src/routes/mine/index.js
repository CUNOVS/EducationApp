/* eslint-disable indent */
import React from 'react'
import { connect } from 'dva'
import { Button, Flex, WingBlank, WhiteSpace, List, Icon, Modal, Badge, Grid, Layout } from 'components'
import { getImages, getErrorImg, getLocalIcon } from 'utils'
import { routerRedux } from 'dva/router'
import { baseURL, api } from 'utils/config'
import styles from './index.less'
import { handleBuildingClick } from 'utils'
import bg from '../../themes/images/others/minebg.png'

const PrefixCls = 'mine',
  { helpApi } = api,
  Item = List.Item,
  Brief = Item.Brief

function Mine ({ location, dispatch, mine, app, login }) {
  const name = '我的'
  const { users: { username, useravatar }, isLogin, noViewCount = 0 } = app,
    { gridDatas } = mine
  const handleLogin = () => {
      dispatch(routerRedux.push({
        pathname: '/login',
      }))
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
      <div className={styles[`${PrefixCls}-outer`]} style={{ backgroundImage: `url(${bg})` }}>
        {/* <div className={styles[`${PrefixCls}-outer-title`]}>{name}</div> */}
        <div className={styles[`${PrefixCls}-outer-box`]}>
          <img src={getImages(useravatar, 'user')} alt=""/>
          <div className={styles[`${PrefixCls}-outer-box-username`]}>未登录</div>
        </div>
      </div>
      <Grid data={gridDatas} activeStyle={false} onClick={handleBuildingClick.bind(null, dispatch)}/>
      <WhiteSpace size="xs"/>
      <div className={styles[`${PrefixCls}-info`]}>
        <List>
          <Item
            thumb={<Icon type={getLocalIcon('/mine/shopcar.svg')}/>}
            arrow="horizontal"
            onClick={handleBuildingClick.bind(null, dispatch)}
          >
            我的购物车
          </Item>
          <Item
            thumb={<Icon type={getLocalIcon('/mine/opinion.svg')}/>}

            arrow="horizontal"
            onClick={handleBuildingClick.bind(null, dispatch)}
          >
            意见反馈
          </Item>
          <Item
            thumb={<Icon type={getLocalIcon('/mine/help.svg')}/>}
            arrow="horizontal"
            onClick={handleBuildingClick.bind(null, dispatch)}
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
      <div>
        <WhiteSpace size="lg"/>
        {
          !isLogin ?

            <Button style={{ backgroundColor: '#108ee9' }}
                    type="primary"
                    onClick={handleLogin}
            >登录</Button>
            :
            <Button style={{ border: '1px solid #fff', color: '#fff', background: '#ff5353' }}
                    type="primary"
                    onClick={showAlert}
            >退出</Button>
        }
      </div>
    </div>
  )
}

export default connect(({ loading, mine, app, login }) => ({
  loading,
  mine,
  app,
  login,
}))(Mine)
