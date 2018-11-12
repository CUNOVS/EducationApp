/*WKC
11:59*/
import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const defaultData = [
  {
    title: 'Spring Cloud微服务实战',
    img: 'https://img1.mukewang.com/szimg/5a9ca4e80001786305400300.jpg',
    price: '366',
    id: '1',
  },
  {
    title: 'Vue全家桶+SSR+Koa2全栈开发美团网',
    img: 'https://img4.mukewang.com/szimg/5baf3f0a000180df06000338.jpg',
    price: '388',
    id: '2',
  },
];

export default modelExtend(model, {
  namespace: 'shopping',
  state: {
    title: '',
    dataList: [],
    currentSelect: [],
    totalPrice: 0.00,
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname, action, query }) => {
        if (pathname === `/shoppings`) {
          dispatch({
            type: 'updateState',
            currentSelect: [],
            totalPrice: 0.00,
          });
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
          title: '购物车',
          dataList: defaultData,
        },
      });
    },
  },
});
