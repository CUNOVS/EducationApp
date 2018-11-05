/* WKC
教师风采详情页
PersonConcern是关注列表
* */
import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'components/nav';
import TitleBox from 'components/titlecontainer';
import Container from 'components/container/index';
import PersonConcern from 'components/personConcern';
import InfoBox from 'components/infobox/index';
import { getImages, getLocalIcon, handleBuildingClick, handleGridClick } from 'utils';
import { connect } from 'dva';
import styles from './index.less';

const PrefixCls = 'mienDetails';

class MienDetails extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    	const { name = '' } = this.props.location.query,
    			{ data, vide, defaultInfoDatas, banner } = this.props.mienDetails;
    	console.log(data);
    return (
      <div>
        <Nav title={name} dispatch={this.props.dispatch} />
        <div className={styles[`${PrefixCls}-back`]} style={{ backgroundImage: `url(${data.imag})` }}>
          <div className={styles[`${PrefixCls}-back-text`]}>
            <div>
              <div style={{ fontSize: '0.5rem', margin: '0.3rem' }}>{data.name}</div>
              <div style={{ fontSize: '0.3rem', margin: '0.3rem' }}>{data.details}</div>
              <div style={{ fontSize: '0.3rem', margin: '0.3rem' }}>开课<big>{data.clas}</big>门,已有<big>{data.num}</big>人学习</div>
            </div>
            <div style={{ padding: '0 0.3rem 10% 0' }}>
              <div className={styles[`${PrefixCls}-back-butt`]}>关注</div>
            </div>
          </div>
        </div>
        <PersonConcern banner={banner} />
        <TitleBox title="精品课程" sup="" />
        <Container
          title="新课推荐"
          children={defaultInfoDatas && defaultInfoDatas.map((data, i) => {
		          return <InfoBox key={i} {...data} handleClick={handleBuildingClick} />;
		        })}
        />
      </div>
    );
  }
}

export default connect(({ mienDetails }) => ({
  mienDetails
}))(MienDetails);
