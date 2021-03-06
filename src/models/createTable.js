import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const hotBannerDatas = ['全部','前沿技术','前端开发','后端开发','后台开发','移动开发'];
const defaultListData = [
  { image: require('../themes/images/list/01.jpg'),
    title: 'Web前端开发之JavaScript精英课堂【渡一教育】',
    price: '240',
    people: '2490',
    route:'enterOf',
  },
  { image: require('../themes/images/list/02.jpg'),
    title: '淘宝运营 引爆店铺免费流量 搜索排名 直通车新玩法【思睿电商】',
    price: '140',
    people: '5125',
    route:'signUp',
  },
  { image: require('../themes/images/list/03.jpg'),
    title: 'Sai商业插画班、萌系漫画、Q版设计三位老师传授二次元绘画秘籍',
    price: '20',
    people: '1230',
    route:'enterOf',
  },
  { image: require('../themes/images/list/04.jpg'),
    title: '摄影拍摄/摄影后期修图/人像后期/影楼后期/PS商业修图/风光调色',
    price: '99',
    people: '254',
    route:'enterOf',
  },
  { image: require('../themes/images/list/05.png'),
    title: '（今晚直播）3DMAX建模效果图 CAD VRAY PS 室内设计 家装工装',
    price: '34',
    people: '23',
    route:'enterOf',
  },
]
const data = [
	{ value: 0, label: '前端技术发发' },
	{ value: 1, label: '前端开发' },
	{ value: 2, label: '后端开发' },
	{ value: 3, label: '移动开发' },
],data1 = [
	{ value: 0, label: '微服务' },
	{ value: 1, label: '区块链' },
	{ value: 2, label: '以太坊' },
	{ value: 3, label: '人工智能' },
],data2 = [
	{ value: 0, label: '入门' },
	{ value: 1, label: '初级' },
	{ value: 2, label: '中级' },
	{ value: 3, label: '高级' },
];

export default modelExtend(model,{
	namespace:"createTable",
	state:{
		hot:[],
		listData:[],
		data:[],
		data1:[],
		data2:[]
	},
	subscriptions:{
		setup ({history,dispatch}){
			history.listen(({ pathname, action, query }) => {
				if(pathname === '/createTable'){
					dispatch({
						type:'query'
					})
				}
			});
		},
	},
	effects:{
	    * query ({ payload }, { call, put, select }) {
	      yield put({
	        type: 'updateState',
	        payload: {
	          hot:hotBannerDatas,
	          listData: defaultListData,
	          data:data,
	          data1:data1,
	          data2:data2,
	        },
	      });
	    },
	}
})
