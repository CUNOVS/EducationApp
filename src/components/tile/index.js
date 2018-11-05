import React from 'react';
import { Carousel } from 'antd-mobile';
import ReactDOM from 'react-dom';
import styles from './index.less';

const PrefixCls = 'tlie';

class Tile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentWillMount () {

  }

  layoutItem (data) {
    const { image, title = '',route } = data;
    return (
      <div className={styles[`${PrefixCls}-outer-item`]} onClick={this.props.handleClick.bind(this,data,this.props.dispatch)}>
        <img src={image} alt="" />
        <span>{title}</span>
      </div>
    );
  }

  render () {
    return (
      <div className={styles[`${PrefixCls}-outer`]}>
        {this.props.items.map(item => this.layoutItem(item))}
      </div>
    );
  }
}

export default Tile;
