import modelExtend from 'dva-model-extend'
import { model } from 'models/common'

const defualtComments = [
  {
    userPhoto: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=625620857,52644579&fm=173&app=25&f=JPEG?w=353&h=360&s=F7B5E46C4EA09766006CEC13030050CB',
    name: '李云龙',
    date: '2018.10.29',
    contents: '二营长把老子的意大利炮扛出来',
    items: [{
      userPhoto: 'http://dingyue.nosdn.127.net/mAw6jpJ9OXrM5gVXbTixHR5WvVIuNL00Qi5ydtqPFe6Jz1539050129689.jpeg',
      name: '二营长',
      rname: '李云龙',
      date: '2018.10.30',
      contents: '报告团长只剩炊事班的意大利面了',
      id: '1',
    }],
    id: '1',
  },
  {
    userPhoto: '',
    name: '缝小肛',
    date: '2018.10.29',
    contents: '我学了一节课，考上了清华你们呢？',
    items: [],
    id: '2',
    num: 0,
  },
]

export default modelExtend(model, {
  namespace: 'lessondetails',
  state: {
    currentComments: [],
  },
  subscriptions: {
    setup ({ history, dispatch }) {
      history.listen(({ pathname, action, query }) => {
        if (pathname === '/lessondetails') {
          dispatch({
            type: 'query',
          })
        }
      })
    },
  },
  effects: {
    * query ({ payload }, { call, put, select }) {
      yield put({
        type: 'updateState',
        payload: {
          currentComments: defualtComments,
        },
      })
    },
    * praise ({ payload }, { call, put, select }) {
      const { isClick, message = '操作失败，请稍后尝试' } = payload
      let { num } = yield select(_ => _.details)
      // const data = yield call(Praise, { ...payload });
      if (data.success) {
        yield put({
          type: 'updateState',
          payload: {
            isPraise: !isClick,
            num: isClick ? --num : ++num,
          },
        })
        Toast.success('操作成功')
      } else {
        Toast.fail(message)
      }
    },

  },


})
