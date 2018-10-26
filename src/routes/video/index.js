/**
 * @author Lowkey
 * @date 2018/10/26
 * @Description: 视频播放页
*/
import React from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Nav from 'components/nav'
import pic from '../lessondetails/pic.jpg'
import video from '../lessondetails/jquery.mp4'

const PrefixCls = 'video'

class Video extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      element:''
    }
  }

  componentDidMount () {
    const video = ReactDOM.findDOMNode(this.video)
     this.setState({
       element:video
     })
    if (video.requestFullscreen) {

      video.requestFullscreen()

    }

    else if (video.mozRequestFullScreen) {

      video.mozRequestFullScreen()

    }

    else if (video.msRequestFullscreen) {

      video.msRequestFullscreen()

    }

    else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullScreen()

    }
  }

  componentWillMount () {

  }

  tetxClick = (video) => {
    console.log(video)
    if (video.requestFullscreen) {

      video.requestFullscreen()

    }

    else if (video.mozRequestFullScreen) {

      video.mozRequestFullScreen()

    }

    else if (video.msRequestFullscreen) {

      video.msRequestFullscreen()

    }

    else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullScreen()

    }
  }

  render () {
    return (
      <div>
        <Nav title={name} dispatch={this.props.dispatch}/>
        <div onClick={this.tetxClick.bind(this, this.state.element)}>sdfsd</div>

        <video key={1}
               ref={el => this.video = el}
               style={{ objectFit: 'contain' }}
               width="100%"
               preload="none"
               poster={pic}
               src={video}
               controlsList="nodownload"
               controls="controls"
        />
      </div>
    )
  }
}

Video.propTypes = {}

export default connect(({ loading, video }) => ({
  loading,
  video,
}))(Video)
