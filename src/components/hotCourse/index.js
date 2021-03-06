/* eslint-disable no-trailing-spaces */
import React from 'react';
import { Carousel } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import styles from './index.less';
import { Icon } from 'components';
import { getLocalIcon } from 'utils';

const PrefixCls = 'hotCourse';

class HotCourse extends React.Component {
  constructor (props) {
    super(props);
  }

  state = {
    data: [],
    slideIndex: 0,
    isLoad: false,
  };

  componentWillMount () {

  }

  render () {
    const { slideIndex } = this.state,
      bannerDatas = this.props.bannerDatas,
      handlerClick = () => {
        this.props.dispatch(routerRedux.push({
          pathname: 'hotranking',
        }),
        );
      };
    return (
      <div className={styles[`${PrefixCls}-outer`]} style={{ clear: 'both' }}>
        <div className={styles[`${PrefixCls}-outer-title`]}>
          <div>热门课程</div>
          <div className={styles[`${PrefixCls}-outer-title-right`]} onClick={handlerClick}>
            <span>热门排行</span>
            <span><Icon type={getLocalIcon('/components/hot.svg')} /></span>
          </div>
        </div>
        <Carousel
          className="space-carousel"
          selectedIndex={slideIndex}
          infinite
          dots={false}
          cellSpacing={10}
          slideWidth={0.6}
        >
          {bannerDatas && bannerDatas.map((data, i) => (
            <div
              className={styles[`${PrefixCls}-image`]}
              key={`a_${i}`}
              onClick={this.props.handleClick.bind(null, data)}
            >
              <img
                ref={el => this.banner = el}
                src={data}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  if (!this.state.isLoad) {
                    this.setState({
                      isLoad: true,
                    });
                    window.dispatchEvent(new Event('resize'));
                  }
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default HotCourse;
