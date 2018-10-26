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

}
