/*WKC
用户评论列表*/
import React from 'react'
import Nav from 'components/nav'
import Comment from 'components/comment'
import { connect } from 'dva'

class CommentList extends React.Component{
	render(){
		const {banner} = this.props.commentList
		return(
			<div>
			<Nav title={name} dispatch={this.props.dispatch}/>
			<Comment bannerDatas={banner} />
			</div>
		)
	}
}

export default connect(({commentList}) =>({
	commentList
}))(CommentList)