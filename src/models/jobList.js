import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const row = [
    {
      section: '第一章',
      part: [{ title: 'Jquery基础课程01', time: '已完成',yep:true, id: '1' }, {
        title: 'Jquery基础课程02',
        time: '未完成',
        yep:false,
        id: '2',
      }, { title: 'Jquery基础课程03',
	      time: '未完成',
	      yep:false,
	      id: '3',
      }],
    },
    {
      section: '第二章',
      part: [{ title: 'Jquery基础课程01', time: '未完成',yep:false, id: '1' }, {
        title: 'Jquery基础课程02',
        time: '未完成',
        yep:false,
        id: '2',
      }, { title: 'Jquery基础课程03', time: '未完成',yep:false, id: '3' }],
    },
  ];

export default modelExtend(model, {
	namespace:'jobList',
	state:{
		row:[]
	},
	subscriptions:{
	setup ({ dispatch, history }) {
	    history.listen(({ pathname, action, query }) => {
	        if (pathname === `/jobList`) {
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
		          row:row
		        },
		      });			
		 }
	}
})
