/*WKC
通知列表转跳的通知详情*/
import React from 'react'
import Nav from 'components/nav'
import { connect } from 'dva'
import { List } from 'antd-mobile';
import { routerRedux } from 'dva/router';

const Item = List.Item;
const Brief = Item.Brief;

class MoreMessageItem extends React.Component {
    constructor(props){
        super(props)
    }
	
    render(){
    const { banner } = this.props.moreMessageItem
    const { name = '' } = this.props.location.query
        return(
            <div>
                <Nav title={name} dispatch={this.props.dispatch}/>         
            </div>
        )
    }
}
export default connect(({ moreMessageItem }) => ({
    moreMessageItem
}))(MoreMessageItem )