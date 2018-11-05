import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const datas = [
	{ value: 0, label: '微信支付',images:require('../routes/pay/wx.png') },
	{ value: 1, label: '支付宝',images:require('../routes/pay/zfb.png') },
];
const curriculum = {
	yep:'flase',
	page:'0',
	connect:'Jquery是继prototype之后又一个优秀的Javascript框架。它是轻量级的js库 ，它兼容CSS3，还兼容各种浏览器（IE 6.0+, FF 1.5+, Safari 2.0+,',
	money:'100',
	discount:'13',
	images:require('../themes/images/list/04.jpg')
}

export default modelExtend(model,{
	namespace:"pay",
	state:{
		datas:[],
		curriculum
	},
	subscriptions:{
		setup ({history,dispatch}){
			history.listen(({ pathname, action, query }) => {
				if(pathname === '/pay'){	
		          dispatch({
		            type: 'query',
		          });
				}
			});
		},
	},
	effects:{
	    * query ({ payload }, { call, put, select }) {
	    	yield put({
	    		type:'updateState',
	    		payload:{
	    			datas:datas,
	    			curriculum:curriculum
	    		}
	    	})
	    },
	}
})
