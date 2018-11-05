import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

export default modelExtend(model,{
	namespace:"markDetails",
	state:{
	},
	subscriptions:{
		setup ({history,dispatch}){
			history.listen(({ pathname, action, query }) => {
				if(pathname === '/markDetails'){
				
				}
			});
		},
	},
	effects:{
	    * query ({ payload }, { call, put, select }) {

	    },
	}
})