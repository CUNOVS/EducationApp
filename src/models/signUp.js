import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const catalog = {
				theme:'Spring Cloud为服务实战',
				fine:'熟练使用SpringCloud组件实现微服务,向架构师迈进![已升级至Finchley,Release]',
				money:'366.0'
}

const bannerDatas = [
	{head:'促销',badge:'花呗付款',connect:'以支持蚂蚁花呗'},
	{head:'参数',connect:'高级.15小时.2109人学.9.72分'},
	{head:'套餐',connect:'套餐最高立省64，更多套餐有惊喜'},
	{head:'促销',connect:'以支持蚂蚁花呗'}
]

const score = {
	whole:'9.72',
	wholeO:'9.8',
	wholeT:'9.76',
	wholeTh:'9.7',
}

const bannerComment = [
  { userIcon: '', userName: '缝小肛', rate: 1, createDate: '2018.10.26', content: '这课我学完涨了2倍工资，你们呢？' }
]

export default modelExtend(model,{
	namespace:"signUp",
	state:{
		banner:[],
		catalog,
		score,
		bannerComment
	},
	subscriptions:{
		setup ({history,dispatch}){
			history.listen(({ pathname, action, query }) => {
				if(pathname === '/signUp'){
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
	          banner:bannerDatas,
	          catalog:catalog,
	          score:score,
	          bannerComment:bannerComment
	        }
	      });
	    },
	}
})
