import { parse } from 'qs';
import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

export default modelExtend(model, {
  namespace: 'lesson',
  state: {
    content: ''
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        let { pathname, action } = location;
        if (pathname.startsWith('/lesson')) {
          if (action === 'PUSH') {
            dispatch({
              type: 'query',
            });
          }
        }
      });
    },
  },
  effects: {
    * query ({ payload }, { call, put, select }) {

    },
  }

});
