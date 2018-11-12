import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const row = [
  {
    section: '第一章',
    part: [
      { title: 'Jquery基础课程01', status: '已完成', id: '1' },
      { title: 'Jquery基础课程02', status: '未完成', id: '2' },
      { title: 'Jquery基础课程03', status: '未完成', id: '3' },
    ],
  },
  {
    section: '第二章',
    part: [
      { title: 'Jquery基础课程01', status: '未完成', id: '1' },
      { title: 'Jquery基础课程02', status: '未完成', id: '2' },
      { title: 'Jquery基础课程03', status: '未完成', id: '3' },
    ],
  },
];

export default modelExtend(model, {
  namespace: 'homeworklist',
  state: {
    row: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname, action, query }) => {
        if (pathname === '/homeworklist') {
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
          row,
        },
      });
    },
  },
});
