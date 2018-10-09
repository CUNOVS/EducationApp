import React from 'react'
import styles from './index.less'
import Nav from 'components/nav'
import { connect } from 'dva'
import { Tabs, WhiteSpace, Badge } from 'components'

const PrefixCls = 'lessondetails'
let content = '<p style="text-align: center;margin:0">\n' +
  '<span width="100%" autobuffer="" controls="" src="http://www.myals.gov.cn:8088/526fe308-cd22-4c89-9afa-144c5de56bbe/526fe308-cd22-4c89-9afa-144c5de56bbe1.mp4" poster="/526fe308-cd22-4c89-9afa-144c5de56bbe/526fe308-cd22-4c89-9afa-144c5de56bbe1.jpg">&nbsp;</span>\n' +
  '</p>'
const tabs = [
  { title: <Badge >详情</Badge> },
  { title: <Badge >章节</Badge> },
  { title: <Badge >笔记</Badge> },
];
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

  }

  render () {
    const { name = '' } = this.props.location.query
    const getContents = () => {
      let str = 'video'
      let newContent = content.replace('span', str)
      return {
        __html: newContent,
      }
    }

    return (
      <div className={styles[`${PrefixCls}-outer`]}>
        <Nav title={name} dispatch={this.props.dispatch}/>
        <div dangerouslySetInnerHTML={getContents()}/>
        <Tabs tabs={tabs}
              initialPage={1}
              onChange={(tab, index) => { console.log('onChange', index, tab); }}
              onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of first tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of second tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of third tab
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
