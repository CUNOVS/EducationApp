import React from 'react'
import { routerRedux } from 'dva/router';
import styles from './index.less'
import { getImages, getLocalIcon, handleBuildingClick } from 'utils'
import Rate from 'rc-rate';
import Comment from 'components/comment'

const PrefixCls = 'evaluating';
const commentList = (dispatch) => {
	dispatch(routerRedux.push({
		pathname:'/commentList'
	}))
}


function Evaluating (props) {
			return(<div className={styles[`${PrefixCls}-grade`]}>
				<div className={styles[`${PrefixCls}-grade-top`]}>
				<div>评分</div>
				<p onClick={commentList.bind(this, props.dispatch)}>更多</p>
				</div>
				<div className={styles[`${PrefixCls}-grade-chil`]}>
					<div className={styles[`${PrefixCls}-grade-chil-chill`]}>{props.whole}</div>
					<div><p>内容充实</p><p>{props.wholeO}</p></div>
					<div><p>通俗易懂</p><p>{props.wholeT}</p></div>
					<div><p>逻辑清晰</p><p>{props.wholeTh}</p></div>
				</div>	
				 <Comment bannerDatas={props.bannerDatas}/>		
			</div>)		
}

export default Evaluating