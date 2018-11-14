import { parse } from 'qs';
import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const defaultDate = {
  img: require('../themes/images/facechat/01.jpg'),
  title: '摄影爱好者',
  founder: '王刚',
  people: '2490',
};

export default modelExtend(model, {
  namespace: 'facechatdetails',
  state: {
    data: {},
  },
  subscriptions: {
    setup ({ history, dispatch }) {
      history.listen(({ pathname, action, query }) => {
        if (pathname === '/facechatdetails') {
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
          data:defaultDate
        },
      });
    },

  },
});
