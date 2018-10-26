/*WKC
购物页
signUp组件是活动列表   点击事件handleClick,主题head,微标签badge,内容connect
evaluating是评分及评论，里面有个Comment组件是评论列表
* */
import React from 'react'
import { connect } from 'dva'
import { Layout, WhiteSpace, Icon, List,TabBar } from 'components'
import Nav from 'components/nav'
import Sign from 'components/signUp'
import Purchase from 'components/purchase'
import Evaluating from 'components/evaluating'
import { getImages, getLocalIcon, handleBuildingClick } from 'utils'

import styles from './index.less'

const SignUp = ({ location, dispatch, signUp }) => {
	const { name='' } = location.query,
		PrefixCls='signUp';
	const { banner,catalog,score,bannerComment } = signUp;
	const Item = List.Item,
			Brief = Item.Brief
	return(
		<div>
		<div style={{background: 'white'}}>
			<Nav title={name} dispatch={dispatch}/>
			<div >
				<p className={styles[`${PrefixCls}-Choice`]}>{catalog.theme}</p>
				<p className={styles[`${PrefixCls}-Choice-choice`]}>{catalog.fine}</p>
			</div>
			<div className={styles[`${PrefixCls}-ea`]}>
				<p>￥ {catalog.money}</p>
			</div>
			<div className={styles[`${PrefixCls}-li`]}>
				<Sign banner={banner} />
			</div>
			<WhiteSpace size='md' />
		</div>
		<WhiteSpace size='md' />
		<div className={styles[`${PrefixCls}-borNO`]}>
		<Evaluating dispatch={dispatch} bannerDatas={bannerComment} {...score} />
		</div>
		<Purchase/>
		</div>
	)
}

export default connect(({signUp}) =>({
	signUp 
}))(SignUp)
