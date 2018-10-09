import { parse } from 'qs';
import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const namespace = 'school';
const defaultData = [
  { image: require('../themes/images/school/pay.png'), title: '在线缴费' },
  { image: require('../themes/images/school/course.png'), title: '在线选课' },
  { image: require('../themes/images/school/message.png'), title: '通知' },
  { image: require('../themes/images/school/course.png'), title: '在线缴费' },
  { image: require('../themes/images/school/course.png'), title: '在线缴费' },
  { image: require('../themes/images/school/course.png'), title: '在线缴费' },
  { image: require('../themes/images/school/course.png'), title: '在线缴费' },
  { image: require('../themes/images/school/course.png'), title: '在线缴费' },
  { image: require('../themes/images/school/course.png'), title: '在线缴费' },
];
export default modelExtend(model, {
  namespace,
  state: {
    datas: []
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname, action, query }) => {
        if (pathname === `/${namespace}`) {
          if (action === 'PUSH') {
            dispatch({
              type: 'queryListview',
            });
          }
        }
      });
    },
  },
  effects: {
    * queryListview ({ payload }, { call, put, select }) {
      yield put({
        type: 'updateState',
        payload: {
          datas: defaultData
        }
      });
    },
  },
});
