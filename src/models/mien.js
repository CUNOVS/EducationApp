import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const data=[
	{
	 imag:'https://img-ph-mirror.nosdn.127.net/l4Sh6C4IheRcW92RS3ID4g==/6608871924468841382.jpg?imageView&quality=100&thumbnail=75y75',
	 name:'戴志欢',
	 school:'开放大学',
	 clas:'5',
	 man:'55041',
	 route:'curriculum'
	}
]

export default modelExtend(model,{
	namespace:"mien",
	state:{
		data:[]
	},
	subscriptions:{
		setup ({history,dispatch}){
			history.listen(({ pathname, action, query }) => {
				if(pathname === '/mien'){	
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
		          data:data
		        }
		      });	    	
	    },
	}
})
