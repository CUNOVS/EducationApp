import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const data={
	 imag:"https://img-ph-mirror.nosdn.127.net/l4Sh6C4IheRcW92RS3ID4g==/6608871924468841382.jpg?imageView&quality=100&thumbnail=75y75",
	 name:'戴志欢',
	 details:'XX大学    XX教师     XXXXX',
	 clas:'5',
	 num:'27,100'
  },vide = {
  	One:'视频介绍',
  	Two:'视频介绍'
  },defaultInfoDatas = [
  { text: '[艾德]营养师考试通关课程', image: require('../themes/images/newcourse/c01.jpg') },
  { text: '执业兽医资格考试真题解析班', image: require('../themes/images/newcourse/c02.jpg') },
  { text: '设计软件基础班PS/Ai/C4D', image: require('../themes/images/newcourse/c03.jpg') },
  { text: 'Photoshop后期从初级到高级（精修、调色、合成）大师班', image: require('../themes/images/newcourse/c04.jpg') },
],banner = [
	'','',''
];

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
