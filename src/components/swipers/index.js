
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipes from 'react-swipes';
import styles from './index.less';

// eslint-disable-next-line react/prefer-stateless-function
class CardSilder extends Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    let opt = {
      distance: 40,
      currentPoint: 0, // 初始位置，默认从0即第一个元素开始
      swTouchstart: ev => {
      },
      swTouchmove: ev => {
      },
      swTouchend: ev => {
      }
    };
    
    return (
      <section>
        <div className={styles.viewport}>
          <div className={styles.flipsnap}>
            <ReactSwipes className={styles.cardSlide} options={opt}>
              {this.props.datas.map((data, index) => (
                <div className={styles.imgBox}>
                  <img src={data.image} alt="" />
                  <div>{data.text}</div>
                </div>
              ))}
            </ReactSwipes>
          </div>
        </div>
      </section>
    );
  }
}

export default CardSilder;
