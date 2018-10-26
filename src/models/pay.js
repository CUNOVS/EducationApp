import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const datas = [
{
    icon: require('../themes/images/grid/01.png'),
    text: 'IT互联网',
    route:'enterOf'
  },
  {
    icon: require('../themes/images/grid/02.png'),
    text: '外语',
    route:'signUp'
  },
  {
    icon: require('../themes/images/grid/03.png'),
    text: '文学历史',
    route:'mien'
  }, {
    icon: require('../themes/images/grid/04.png'),
    text: '有机高分子',
    route:'mienDetails'
  },
  {
    icon: require('../themes/images/grid/05.png'),
    text: '生命科学',
    route:'curriculum'
  },
  {
    icon: require('../themes/images/grid/06.png'),
    text: '工学',
    route:'curriculum'
  },
  {
    icon: require('../themes/images/grid/07.png'),
    text: '经理管理',
    route:'curriculum'
  },
  {
    icon: require('../themes/images/grid/08.png'),
    text: '考研',
    route:'curriculum'
  },
  {
    icon: require('../themes/images/grid/01.png'),
    text: '哲学',
    route:'curriculum'
  }
]

export default modelExtend(model,{
	namespace:"pay",
	state:{
		datas:[]
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
	    			datas:datas
	    		}
	    	})
	    },
	}
})
