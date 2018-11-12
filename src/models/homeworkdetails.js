/**
 * @author Lowkey
 * @date 2018/11/07 17:44:21
 * @Description:
 */
import { parse } from 'qs';
import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

const defaultQuestion = {
  title:'请用英语富有感情的朗读下面的文章',
  question:'I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident, that all men are created equal."\n' +
    'I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.\n' +
    'I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an oasis of freedom and justice.\n' +
    'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.\n' +
    'I have a dream today!\n' +
    'I have a dream that one day, down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of "interposition" and "nullification" -- one day right there in Alabama little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers.\n' +
    'I have a dream today!\n' +
    'I have a dream that one day every valley shall be exalted, and every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight; "and the glory of the Lord shall be revealed and all flesh shall see it together."?'
};
export default modelExtend(model, {
  namespace: 'homeworkdetails',
  state: {
    title: '',
    question: '',
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        let { pathname, query, action } = location;
        if (pathname.startsWith('/homeworkdetails')) {
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
      yield put({
        type: 'updateState',
        payload: {
          title: defaultQuestion.title,
          question: defaultQuestion.question,
        },
      });
    },
  },

});
