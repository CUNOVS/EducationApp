import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

export default modelExtend(model,{
	namespace:"mienDetails",
	state:{
		data,
		vide,
		defaultInfoDatas:[]
	},
	subscriptions:{
		setup ({history,dispatch}){
			history.listen(({ pathname, action, query }) => {
				if(pathname === '/mienDetails'){
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
	        	data:data,
	        	vide:vide,
	        	defaultInfoDatas:defaultInfoDatas,
	        	banner:banner
	        },
	      });
	    },
	}
})
