import React from 'react'
import styles from './index.less'
import Nav from 'components/nav'
import { connect } from 'dva'
import TitleBox from 'components/titlecontainer'
import { chapterrow } from 'components/row'
import { Tabs, WhiteSpace, Badge } from 'components'
import Introduction from 'components/introduction'
import { List } from 'antd-mobile'
import NoContent from 'components/nocontent'
import Rate from 'rc-rate'
import '../../../node_modules/rc-rate/assets/index.css'
import Photo from 'components/photo'
import video from './jquery.mp4'
import pic from './pic.jpg'

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
    { data: '9:09', content: '0-1  jQuery基础课程(上)' },
    { data: '7:13', content: '0-2  jQuery基础课程(下)' },
  ],
  Item = List.Item

class LessonDetails extends React.Component {
  constructor (props) {
    super(props)
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
        <Nav title={name} dispatch={this.props.dispatch}/>
        {/* <div dangerouslySetInnerHTML={getContents()}/> */}
        <div>
          {getvideo()}
        </div>
        <Tabs tabs={tabs}
              onChange={(tab, index) => {
                console.log('onChange', index, tab)
              }}
              onTabClick={(tab, index) => {
                console.log('onTabClick', index, tab)
              }}
        >
          <div>
            <TitleBox title="课程简介" sup=""/>
            <Introduction/>
            <div className={styles[`${PrefixCls}-rate`]}>
              <div className={styles[`${PrefixCls}-rate-title`]}>综合得分 <span style={{ color: '#ffaf0d' }}>1</span></div>
              <Rate style={{ fontSize: '25px' }} defaultValue={1}/>
            </div>
            <TitleBox title="课程讲师" sup=""/>
            <Photo
              path="https://img-ph-mirror.nosdn.127.net/l4Sh6C4IheRcW92RS3ID4g==/6608871924468841382.jpg?imageView&quality=100&thumbnail=75y75"
              type="user" name="戴志欢"/>
            <p
              className={styles[`${PrefixCls}-teacher`]}>云知梦教学总监，中国PHP高效培训第一人，山西PHP和RHCA高端培训第一人，七年互联网开发经验，曾在香港电讯盈科、北大青鸟集团、山西远大教育等公司任职。曾获得Redhat
              RHCA构架师和RHCDS数据中心专家，在国内排名为40名左右，在全球排名为300名左右。</p>
          </div>
          <div>
            <List className={styles[`${PrefixCls}-list`]}>
              {row.map((d, i) => (
                chapterrow(d.data, d.content, i)
              ))}
            </List>
          </div>
          <div>
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
