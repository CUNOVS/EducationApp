/*WKC
 * Modal通知消息的弹出窗口,内容是用ref取的*/
import React from 'react';
import ReactDOM from 'react-dom'
import { Modal, Carousel, WhiteSpace, WingBlank, Icon } from 'antd-mobile';
import PropTypes from 'prop-types';
import { getLocalIcon } from 'utils';
import styles from './index.less';

const PrefixCls = 'notice';
class Notice extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      connect: ""
    };
  }
  showModal = key => (el) => {
    el.preventDefault()
    const element = ReactDOM.findDOMNode(this.vl)
    const banner = element.innerHTML
    this.setState({
      [key]: true,
      connect: banner
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false
    });
  }

	
  render(){
  	console.log(this.state.modal)
	  return (
	  	<div>
	    <div className={styles[`${PrefixCls}-box`]}>
	      <Icon style={{marginRight:'5px'}} type={getLocalIcon('/components/notice.svg')} />
	      <Carousel className="my-carousel"
	        vertical
	        dots={false}
	        dragging={false}
	        swiping={false}
	        autoplay
	        infinite
	        style={{width:'80%',marginRight:'5px'}}
	      >
	        {
	        	this.props.banner && this.props.banner.map((data,index) => (
	        		<div key={index} ref={el => this.vl = el} className={styles[`${PrefixCls}-item`]} onClick = {this.showModal('modal')}>{data}</div>
	        	))
	        }
	      </Carousel>
				<div style={{color: 'blue',marginRight:'5px'}} onClick={this.props.messageL}>更多</div>
	    </div>
	    <Modal
          visible={this.state.modal}
          transparent
          maskClosable={false}
          title="消息"
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal')(); } }]}
        >
          <div style={{ overflow: 'scroll' }}>
            {this.state.connect}
          </div>
        </Modal>
	  </div>
	  )  	
  }

};
Notice.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default Notice;
