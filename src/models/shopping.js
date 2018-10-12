/*WKC
11:59*/
import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

export default modelExtend(model, {
	namespace:'shopping',
	state:{
		title:""
	},
	subscriptions:{
	setup ({ dispatch, history }) {
	    history.listen(({ pathname, action, query }) => {
	        if (pathname === `/shoppings`) {
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
		        type: 'updateState',
		        payload: {
		          title:"购物车"
		        },
		      });
		 }
	}
})
