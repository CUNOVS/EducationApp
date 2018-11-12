import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const data = [
  {
    imag: 'https://img-ph-mirror.nosdn.127.net/l4Sh6C4IheRcW92RS3ID4g==/6608871924468841382.jpg?imageView&quality=100&thumbnail=75y75',
    name: '戴志欢',
    school: '开放大学',
    clas: '5',
    man: '55041',
  },
  {
    imag: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541418362056&di=003a6daa52797be9b61aeb127a4007aa&imgtype=0&src=http%3A%2F%2Fimg3.a0bi.com%2Fupload%2Fttq%2F20150430%2F1430394608701.jpg',
    name: 'Taylor Swift ',
    school: '圣母大学',
    clas: '5',
    man: '55041',
  },
];

export default modelExtend(model, {
  namespace: 'teachermien',
  state: {
    data: [],
  },
  subscriptions: {
    setup ({ history, dispatch }) {
      history.listen(({ pathname, action, query }) => {
        if (pathname === '/teachermien') {
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
          data,
        },
      });
    },
  },
});
