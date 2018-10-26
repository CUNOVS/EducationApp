import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const banner=[
				'1.单元测试占30%',
				'2.单元作业共占20%',
				'3.讨论占10%',
				'4.期末考试占50%',
			],basic={
				title:'JQuery基础课程',
				school:'大学',
				teacher:'教师'
			},classHour={
				title:'第七次开课',
				dates:'2018-10-9至2019-1-18',
				process:'进行至第3周,共15周'
			}
const summary = 'Jquery是继prototype之后又一个优秀的Javascript框架。它是轻量级的js库 ，它兼容CSS3，还兼容各种浏览器（IE 6.0+, FF 1.5+, Safari 2.0+, Opera 9.0+），jQuery2.0及后续版本将不再支持IE6/7/8浏览器。jQuery使用户能更方便地处理HTML（标准通用标记语言下的一个应用）、events、实现动画效果，并且方便地为网站提供AJAX交互。jQuery还有一个比较大的优势是，它的文档说明很全，而且各种应用也说得很详细，同时还有许多成熟的插件可供选择。jQuery能够使用户的html页面保持代码和html内容分离，也就是说，不用再在html里面插入一堆js来调用命令了，只需定义id即可.'			

export default modelExtend(model, {
  namespace: 'enterOf',
  state: {
			banner:[],
			basic,
			num:0
  },
  subscriptions: {
    setup ({ dispatch, history }) {
			history.listen(({ pathname, action, query }) => {
				if(pathname === '/enterOf'){
		          dispatch({
		            type: 'query',
		          });					
				}
			});
    },
  },
  effects: {
	    * query ({ payload }, { call, put, select }) {
	      yield put({
	        type: 'updateState',
	        payload: {
	          banner:banner,
	          basic:basic,
	          num:50541,
	          classHour:classHour,
	          summary:summary
	        }
	      });
	    }
  },


});