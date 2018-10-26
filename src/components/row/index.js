import styles from './index.less'
import React from 'react'
import { List, Badge, Icon, Tag, Card } from 'antd-mobile'
import { getErrorImg, getImages, getLocalIcon } from 'utils'

import Rate from 'rc-rate'
import '../../../node_modules/rc-rate/assets/index.css'

const PrefixCls = 'row',
  Item = List.Item,
  Brief = Item.Brief

module.exports = {
  layoutRow: (rowData, sectionID, rowID, onClick) => {
    const { title = '', image = '', time = '', isNew = false } = rowData
    let result = (
      <Item className={styles[`${PrefixCls}-item`]}
            key={`${PrefixCls}-${sectionID}-${rowID}`}
            thumb={image || ''}
            multipleLine
            wrap
            arrow="horizontal"
            onClick={onClick.bind(null, rowData)}
      >
        <span>{title}</span>
        <Brief>{time}</Brief>
      </Item>
    )
    return isNew ?
      <div className={styles[`${PrefixCls}-newbox`]}><Badge key={`badge - ${sectionID} - ${rowID}`} text={'新'} corner>
        {result}
      </Badge></div>
      :
      result
  },
  message: (rowData, sectionID, rowID, onClick) => {
    let isNew = rowData.flag === '0'
    let result = (
      <Item
        className={'row'}
        key={`${sectionID} - ${rowID}`}
        arrow="horizontal"
        multipleLine
        onClick={onClick.bind(null, rowData.id)}
        wrap
      >
        <div className={`${styles[`${PrefixCls}-message-title`]} ${isNew ? 'news' : ''}`}>
          <h3>{rowData.title}</h3>
        </div>
        <div className={styles[`${PrefixCls}-message-content`]}>{rowData.content}</div>
        <Brief>
          {rowData.time}
        </Brief>
      </Item>
    )

    return !isNew ? result :
      <Badge key={`badge - ${sectionID} - ${rowID}`} text={'新'} corner>
        {result}
      </Badge>
  },

  chapterRow: ({ title, time, id }, onClick) => {
    /**
     * @author Lowkey
     * @date 2018/10/25
     * @Description: 课程播放列表
     */
    return (
      <div key={id} className={styles[`${PrefixCls}-chapter-outer`]}>
        <div className={styles[`${PrefixCls}-chapter-outer-left`]}>
          <span>
            <Icon style={{ verticalAlign: 'middle' }}
                  type={getLocalIcon('/row/video.svg')}/>
          </span>
          <span className={styles[`${PrefixCls}-chapter-outer-left-title`]}>
            {title}
          </span>
        </div>
        <div className={styles[`${PrefixCls}-chapter-outer-right`]}>
          {time}
        </div>
      </div>
    )
  },
  gradeRow: (data) => {
    /**
     * @author Lowkey
     * @date 2018/10/26
     * @Description: 课程评价列表
     */
    const { userIcon, userName, rate, createDate, content } = data
    return <div className={styles[`${PrefixCls}-grade-outer`]}>
      <div className={styles[`${PrefixCls}-grade-outer-info`]}>
        <div className={styles[`${PrefixCls}-grade-outer-info-left`]}>
          <img src={getImages(userIcon, '')} alt=""/>
          <span>{userName}</span>
        </div>
        <div className={styles[`${PrefixCls}-grade-outer-info-right`]}>
          <Rate style={{ fontSize: '14px' }} disab defaultValue={rate}/>
          <span>{createDate}</span>
        </div>
      </div>
      <div className={styles[`${PrefixCls}-grade-outer-content`]}>
        {content}
      </div>
    </div>
  },
<<<<<<< HEAD
  chapterrow: (data, content, index, onClick) => {
  	return (
    <Item extra={data} 
        key={index}
        onClick={onClick}
        className={styles[`${PrefixCls}-chap`]}
      ><div  className={styles[`${PrefixCls}-chap-content`]}>{content}</div></Item>
  	);
  },
  fraction: ( data, index) => {
  	return (
    <Item
        key={index}
        className={styles[`${PrefixCls}-fra`]}
    >
    	<div  className={styles[`${PrefixCls}-fra-content`]}>{data.curriculum}</div>
     	<div  className={styles[`${PrefixCls}-fra-content`]}>{data.age}</div> 
     	<div  className={styles[`${PrefixCls}-fra-content`]}>{data.fraction}</div>
    </Item>
  	);
  },
  exhibition: (data,index) => {
  	return(
			<div>
				{
					data && data.map((data,index) => (
								<div key={index} className={styles[`${PrefixCls}-exhibition`]} >
                	<div className={styles[`${PrefixCls}-exhibition-image`]}>
                		<img src={data.imag}/>
                	</div>
                	<div className={styles[`${PrefixCls}-exhibition-tex`]}>
                		<div className={styles[`${PrefixCls}-exhibition-tex-chil`]}>
                			<div style={{fontSize:'0.3rem'}}>{data.name}</div>
                			<div className={styles[`${PrefixCls}-exhibition-comm`]} style={{paddingTop:'0.1rem'}}>{data.school}</div>
                		</div>
	                	<div className={styles[`${PrefixCls}-exhibition-onButt`]}>
	                		添加关注
	                	</div>
                		<div className={styles[`${PrefixCls}-exhibition-botto`]}>
                			<div>开课{data.clas}门</div>
                			<div style={{margin:'0 0.1rem'}}>|</div>
                			<div>共{data.man}学习人数</div>
                		</div>
                	</div>
                </div>
					))
				}
			</div>
  	)
  }
};
=======

}
>>>>>>> c7fb6323691efa73fc999dd6ed2192f781e4544c
