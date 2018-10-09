import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

export default modelExtend(model, {
  namespace: 'lessondetails',
  state: {

  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        let { pathname, query } = location;
      });
    },
  },
  effects: {


  },


});
