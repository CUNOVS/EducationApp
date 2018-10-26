/*WKC
2018.10.11 17:52*/
/**
 * @author Lowkey
 * @date 2018/10/24
 * @Description:
 */
import React from 'react'
import styles from './index.less'
import { connect } from 'dva'
import { routeredux } from 'dva/router'
import TitleBox from 'components/titlecontainer'
import { Tabs, WhiteSpace, Badge } from 'components'
import Introduction from 'components/introduction'
import CourseList from 'components/courselist'
import LessonGrade from 'components/lessongrade'
import NoContent from 'components/nocontent'
import ReactDOM from 'react-dom'
import { getOffsetTopByBody } from 'utils'
import Photo from 'components/photo'
import video from './jquery.mp4'
import pic from './pic.jpg'
import TransparentHeader from 'components/transparentheader'

const PrefixCls = 'lessondetails'
let content = '<p style="text-align: center;margin:0">\n' +
  '<span width="100%" poster="/pre.png" autobuffer="" controls="" src="http://www.myals.gov.cn:8088/526fe308-cd22-4c89-9afa-144c5de56bbe/526fe308-cd22-4c89-9afa-144c5de56bbe1.mp4">&nbsp;</span>\n' +
  '</p>'
const tabs = [
    { title: <Badge>详情</Badge> },
    { title: <Badge>章节</Badge> },
    { title: <Badge>笔记</Badge> },
  ],
  row = [
    {
      section: '第一章',
      part: [{ title: 'Jquery基础课程01', time: '9:10', id: '1' }, {
        title: 'Jquery基础课程02',
        time: '9:10',
        id: '2',
      }, { title: 'Jquery基础课程03' }],
      time: '9:10',
      id: '3',
    },
    {
      section: '第二章',
      part: [{ title: 'Jquery基础课程01', time: '9:10', id: '1' }, {
        title: 'Jquery基础课程02',
        time: '9:10',
        id: '2',
      }, { title: 'Jquery基础课程03', time: '9:10', id: '3' }],
    },
  ]

class LessonDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: cnhtmlHeight,
      tabOffset: 0,
    }
  }

  click = () => {
    console.log(document.getElementById('video'))
    const video = document.getElementById('video')

    document.getElementById('video')
      .webkitRequestFullScreen()
  }

  componentWillMount () {
    document.documentElement.scrollTop = 0
  }

  componentDidMount () {
    const element = ReactDOM.findDOMNode(this.vl),
      tabs = ReactDOM.findDOMNode(this.tabs),
      currentHeight = getOffsetTopByBody(element)
    this.setState({
      height: cnhtmlHeight - currentHeight,
      tabOffset: getOffsetTopByBody(tabs),
    })
  }

  render () {
    const { name = '' } = this.props.location.query
    const getContents = () => {
        let str = 'video'
        let newContent = content.replace('span', str)
        return {
          __html: newContent,
        }
      },
      getvideo = () => {
        return (
          <video key={1}
                 width="100%"
                 preload="none"
                 poster={pic}
                 src={video}
                 controlsList="nodownload"
                 controls="controls"
          />
        )
      }
    return (
      <div className={styles[`${PrefixCls}-outer`]}>
        <TransparentHeader dispatch={this.props.dispatch} offset={this.state.tabOffset}/>
        <div>
          {getvideo()}
        </div>
        <Tabs tabs={tabs}
              ref={el => this.tabs = el}
              onChange={(tab, index) => {
                console.log('onChange', index, tab)
              }}
              onTabClick={(tab, index) => {
                console.log('onTabClick', index, tab)
              }}
        >
          <div>
            <LessonGrade dispatch={this.props.dispatch}/>
            <WhiteSpace size='xs'/>
            <TitleBox title="课程简介" sup=""/>
            <Introduction/>
            <WhiteSpace size='xs'/>
            <TitleBox title="课程讲师" sup=""/>
            <Photo
              path="https://img-ph-mirror.nosdn.127.net/l4Sh6C4IheRcW92RS3ID4g==/6608871924468841382.jpg?imageView&quality=100&thumbnail=75y75"
              type="user" name="戴志欢"/>
            <p
              className={styles[`${PrefixCls}-teacher`]}>云知梦教学总监，中国PHP高效培训第一人，山西PHP和RHCA高端培训第一人，七年互联网开发经验，曾在香港电讯盈科、北大青鸟集团、山西远大教育等公司任职。曾获得Redhat
              RHCA构架师和RHCDS数据中心专家，在国内排名为40名左右，在全球排名为300名左右。</p>
          </div>
          <div ref={el => this.vl = el} style={{ minHeight: this.state.height, background: '#fff'}}>
            <CourseList data={row}/>
          </div>
          <div style={{ background: '#fff' }}>
            <NoContent/>
          </div>
        </Tabs>
      </div>
    )
  }
}

export default connect(({ loading, lessonDetails }) => ({
  loading,
  lessonDetails,
}))(LessonDetails)
