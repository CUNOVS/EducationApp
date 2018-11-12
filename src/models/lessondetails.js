import modelExtend from 'dva-model-extend';
import { model } from 'models/common';

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
  ],
  defauletNote = {
    title: 'jQuery笔记总结day01',
    createDate: '2018.3.05',
    contents: '<div class="article-content"><p><span class="bjh-p">简介</span></p><p><span class="bjh-p">使用简单(用较少的代码完成较多的功能)</span></p><p><span class="bjh-p">由John Resing发布了一种JavaScript类库,也是JavaScript众多类库中应用最广泛的一个,使用了简单的选择机制</span></p><p><span class="bjh-p">使用代码链,基本解决了不同浏览器的差异性问题 jQuery是众多js类库中使用最广泛的一个</span></p><p><span class="bjh-p">使用jQuery只需要从官网上下载类库文件 引入到本页面即可</span></p><p><span class="bjh-p">不同版本之间的区别</span></p><p><span class="bjh-p">1.xxx 兼容性较高,支持老旧的浏览器,对新型的浏览器支持较差</span></p><p><span class="bjh-p">2.xxx 针对新型浏览器进行设置,无法在老的浏览器上使用</span></p><p><span class="bjh-p">js元素(dom元素)与jQuery不是同一种元素</span></p><p><span class="bjh-p">jQuery元素是对js元素一个轻度的封装</span></p><p><span class="bjh-p">jQuery元素只能使用类库中自己的方法 属性和函数</span></p><p><span class="bjh-p">js元素只能使用js自己的函数 方法和属性 两者不能互相使用对方的任何技术</span></p><p><span class="bjh-p">如何转换</span></p><p><span class="bjh-p">jQuery转换为js</span></p><p><span class="bjh-p">$jq-input[0] -&gt; dom_input</span></p><p><span class="bjh-p">$jq_input.get(0) -&gt; dom_input</span></p><p><span class="bjh-p">js转换为jQuery</span></p><p><span class="bjh-p">$(dom_input) -&gt; $jq_input</span></p><p><span class="bjh-p">Selector选择器</span></p><p><span class="bjh-p">$("sel") 在文档中表示所有选择器的统称</span></p><p><span class="bjh-p">1 $("tagName") 直接使用标签拿取元素</span></p><p><span class="bjh-p">2 $(".className") 直接使用类名拿取元素</span></p><p><span class="bjh-p">3 $("#idName") 直接使用id名拿取元素</span></p><p><span class="bjh-p">4 $("tagName.className")和$("tagName#idName") 拿取特定标签内含有id或class的元素</span></p><p><span class="bjh-p">5 $("sel1,sel2,selN") 只要符合其中任意一个就可以成功拿取</span></p><p><span class="bjh-p">6 $("sel1 sel2 selN") 根据从左到右排列具有家族关系的元素 拿取子元素 左祖先右后代的原则</span></p><p><span class="bjh-p">7 $("*") 表示全选元素</span></p><p><span class="bjh-p">8 $("sel1 &gt; sel2") 拿取指定元素的子元素 仅仅只拿取子元素</span></p><p><span class="bjh-p">9 $("sel1 + sel2") 向下选取 必须紧邻 互为兄弟 三者必须同时满足</span></p><p><span class="bjh-p">10 $("sel1 ~ sel2") 向下选取 互为兄弟 两者必须同时满足</span></p><p><span class="bjh-p">基本选择器</span></p><p><span class="bjh-p">1 $(":first") 拿取第一个元素 一般冒号前还要书写具体的元素</span></p><p><span class="bjh-p">2 $(":last") 拿取最后一个元素</span></p><p><span class="bjh-p">3 $(":eq(index)") 拿取索引值是index的元素,index从0开始</span></p><p><span class="bjh-p">4 $(":gt(index)") 拿取大于索引值的元素</span></p><p><span class="bjh-p">5 $(":lt(index)") 拿取小于索引值的元素</span></p><p><span class="bjh-p">6 $(":odd") 拿取索引值是奇数的元素</span></p><p><span class="bjh-p">7 $(":even") 拿取索引值是偶数的元素</span></p><p><span class="bjh-p">8 $(":header") 拿取标题元素(h1 h2 h3...)</span></p><p><span class="bjh-p">9 $("not:(sel)") 拿取无法被sel选择的元素</span></p><p><span class="bjh-p">10 $("标签:contains(text)") 拿取包含指定文本的元素,注意 仅仅是包含</span></p><p><span class="bjh-p">$("li:contains(\'内容\')").text("内容"); text里面有参数的话会替换之前的参数</span></p><p><span class="bjh-p">11 $(":empty") 拿取空元素,元素内部没有内容也没有子元素</span></p><p><span class="bjh-p">$("li:empty").html("&lt;font color=\'red\'&gt;添加的超文本&lt;/font&gt;");</span></p><p><span class="bjh-p">html里面的参数支持超文本(可以解析标签)</span></p><p><span class="bjh-p">12 $(":has(sel)") 拿取匹配sel选择器的元素</span></p><p><span class="bjh-p">13 $(":hidden") 拿取隐藏的元素</span></p><p><span class="bjh-p">14 $(":visible") 拿取所有的可见元素</span></p><p><span class="bjh-p">15 $("[属性名=属性值]") 拿取含有属性名等于属性值的元素,注意必须完全匹配</span></p><p><span class="bjh-p">16 $("[属性名^=属性值开头]") 拿取含有属性名以属性值开头的元素</span></p><p><span class="bjh-p">17 $("[属性名$=属性值结尾]") 拿取以属性值结尾的元素</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4201553291,1368645218&amp;fm=173&amp;app=25&amp;f=JPEG?w=640&amp;h=375&amp;s=6CC3F81ED5B0D19A5C64D96A03005031" data-loaded="0"></div><p><span class="bjh-p"><span class="bjh-br"></span></span></p></div>',
  };

export default modelExtend(model, {
  namespace: 'lessondetails',
  state: {
    currentComments: [],
    note: {},
  },
  subscriptions: {
    setup ({ history, dispatch }) {
      history.listen(({ pathname, action, query }) => {
        if (pathname === '/lessondetails') {
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
          currentComments: defualtComments,
          note: defauletNote,
        },
      });
    },
    * praise ({ payload }, { call, put, select }) {
      const { isClick, message = '操作失败，请稍后尝试' } = payload;
      let { num } = yield select(_ => _.details);
      // const data = yield call(Praise, { ...payload });
      if (data.success) {
        yield put({
          type: 'updateState',
          payload: {
            isPraise: !isClick,
            num: isClick ? --num : ++num,
          },
        });
        Toast.success('操作成功');
      } else {
        Toast.fail(message);
      }
    },

  },


});
