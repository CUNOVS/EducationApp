import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const score = [
	{time:'2018.10.22',name:'用户名',connect:'评论'},
	{time:'2018.10.22',name:'用户名',connect:'评论'},
	{time:'2018.10.22',name:'用户名',connect:'评论'},
	{time:'2018.10.22',name:'用户名',connect:'评论'},
	{time:'2018.10.22',name:'用户名',connect:'评论'},
	{time:'2018.10.22',name:'用户名',connect:'评论'}
]


export default modelExtend(model,{
    namespace:"commentList",
    state:{
    	banner:[]
    },
    subscriptions:{
        setup ({history,dispatch}){
            history.listen(({ pathname, action, query }) => {
                if(pathname === '/commentList'){
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
	          banner:score,
	        }
	      });
	    },
    }
})