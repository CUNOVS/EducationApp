import React from 'react';
import { Carousel } from 'antd-mobile';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './index.less';
import { randomRgbColor } from 'utils';

const PrefixCls = 'tlie';

class Tile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      active: 0,
    };
  }


  componentWillUnmount () {
    this._isMounted = false;
    clearInterval(this.timer);
  }

  componentDidMount () {
    this._isMounted = true;
    if (this._isMounted) {
      this.timer = setInterval(() => {
        this.setState({
          active: Math.floor(Math.random() * this.props.items.length),
        });
      }, 10000);
    }
  }


  layoutItem (data, i) {
    const { image, title = '', route } = data;
    return (
      <div
        className={classNames(styles[`${PrefixCls}-outer-item`], { [styles.active]: i === this.state.active })}
        onClick={this.props.handleClick.bind(this, data, this.props.dispatch)}
      >
        <div className={styles[`${PrefixCls}-front`]} style={{ backgroundColor: randomRgbColor() }}>
          <img src={image} alt="" />
          <span>{title}</span>
        </div>
        <div className={styles[`${PrefixCls}-front`]} style={{ backgroundColor: randomRgbColor() }}>
          <img src={image} alt="" />
          <span>{title}</span>
        </div>
        <div className={styles[`${PrefixCls}-behind`]} style={{ backgroundColor: randomRgbColor() }}>
          <img src={image} alt="" />
          <span>{title}</span>
        </div>
        <div className={styles[`${PrefixCls}-left`]} style={{ backgroundColor: randomRgbColor() }}>
          <img src={image} alt="" />
          <span>{title}</span>
        </div>
        <div className={styles[`${PrefixCls}-right`]} style={{ backgroundColor: randomRgbColor() }}>
          <img src={image} alt="" />
          <span>{title}</span>
        </div>
        <div className={styles[`${PrefixCls}-upper`]} style={{ backgroundColor: randomRgbColor() }}>
          <img src={image} alt="" />
          <span>{title}</span>
        </div>
        <div className={styles[`${PrefixCls}-lower`]} style={{ backgroundColor: randomRgbColor() }}>
          <img src={image} alt="" />
          <span>{title}</span>
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className={styles[`${PrefixCls}-outer`]}>
        {this.props.items.map((item, i) => this.layoutItem(item, i))}
      </div>
    );
  }
}

export default Tile;
