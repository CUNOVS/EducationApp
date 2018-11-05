/* WKC
	报名页
	Purchase是底部按钮组件 */
import React from 'react';
import styles from './index.less';
import Nav from 'components/nav';
import { connect } from 'dva';
import TitleBox from 'components/titlecontainer';
import { Tabs, WhiteSpace, Badge } from 'components';
import Introduction from 'components/introduction';
import { List } from 'antd-mobile';
import Rate from 'rc-rate';
import ReactDOM from 'react-dom';
import { getOffsetTopByBody } from 'utils';
import Photo from 'components/photo';
import Purchase from 'components/purchase';
import video from './jquery.mp4';
import pic from './pic.jpg';

const PrefixCls = 'enterOf';
let content = '<p style="text-align: center;margin:0">\n' +
  '<span width="100%" poster="/pre.png" autobuffer="" controls="" src="http://www.myals.gov.cn:8088/526fe308-cd22-4c89-9afa-144c5de56bbe/526fe308-cd22-4c89-9afa-144c5de56bbe1.mp4">&nbsp;</span>\n' +
  '</p>';
const Item = List.Item;

class EnterOf extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      height: cnhtmlHeight
    };
  }

  click = () => {
    console.log(document.getElementById('video'));
    const video = document.getElementById('video');

    document.getElementById('video')
      .webkitRequestFullScreen();
  }

  componentWillMount () {
    document.documentElement.scrollTop = 0;
  }
  componentDidMount () {
    const element = ReactDOM.findDOMNode(this.vl);
    const currentHeight = getOffsetTopByBody(element);
    this.setState({
      height: cnhtmlHeight - currentHeight
    });
  }
  render () {
    const { name = '' } = this.props.location.query;
    const	{ banner, basic, num, classHour, summary } = this.props.enterOf;
    const getContents = () => {
        let str = 'video';
        let newContent = content.replace('span', str);
        return {
          __html: newContent,
        };
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
        );
      };
    return (
      <div className={styles[`${PrefixCls}-outer`]}>
        <Nav title={name} dispatch={this.props.dispatch} />
        {/* <div dangerouslySetInnerHTML={getContents()}/> */}
        <div>
          {getvideo()}
        </div>
        <div className={styles[`${PrefixCls}-sugg`]}>
          <div>
            {basic.title}
          </div>
          <div className={styles[`${PrefixCls}-sugg-suggest`]}>
            <div className={styles[`${PrefixCls}-sugg-suggest`]}>
              <div className={styles[`${PrefixCls}-sugg-suggest-on`]}>{basic.school}</div>
              <div>{basic.teacher}</div>
            </div>
            <div>{num}人参与</div>
          </div>     
        </div>
        
        <WhiteSpace size="xs" />
        
        <div className={styles[`${PrefixCls}-sugg`]}>
          <div className={styles[`${PrefixCls}-sugg-class`]}>
            {classHour.title}
            <div>
              {classHour.dates}
            </div>
            <div style={{ color: ' #00BB00' }}>
              {classHour.process}
            </div>
          </div>
        </div>

        <WhiteSpace size="xs" />

        <div className={styles[`${PrefixCls}-sugg`]}>
          <div>
		        简介
          </div>
          <div className={styles[`${PrefixCls}-sugg-class`]} style={{ textIndent: '0.4rem', padding: '0 0.4rem' }}>
            {summary}		        
          </div>
        </div>

        <WhiteSpace size="xs" />

        <div className={styles[`${PrefixCls}-sugg`]}>
          <div>
		        	授课大纲
          </div>
        </div>
				
        <WhiteSpace size="xs" />
				
        <div className={styles[`${PrefixCls}-sugg`]} style={{ marginBottom: '0.8rem' }}>
          <div>证书要求</div>
          <div className={styles[`${PrefixCls}-sugg-class`]}>
            {
              banner && banner.map((data, index) => (
                <div key={index}>
                  {data}
                </div>
              ))
            }
          </div>
        </div>
        <Purchase judge />
      </div>
    );
  }
}

export default connect(({ loading, enterOf }) => ({
  loading,
  enterOf
}))(EnterOf);
