import styles from './index.less'
import React from 'react'
import { List, Badge, Icon, Tag, Card,Progress,Button } from 'antd-mobile'
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
          <Rate style={{ fontSize: '14px' }} disabled defaultValue={rate}/>
          <span>{createDate}</span>
        </div>
      </div>
      <div className={styles[`${PrefixCls}-grade-outer-content`]}>
        {content}
      </div>
    </div>
  },

  exhibition: (data,index) => {
    // 教师列表
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
  },
  progressRow: (data,index) => {
  /*WKC 课程列表进度条版*/
	 return(
		        <List className={styles[`${PrefixCls}-progre`]}>
		          {
		            data && data.map((data) => {
		              return (<div className={styles[`${PrefixCls}-progre-item`]}>
		                <div className={styles[`${PrefixCls}-progre-imgbox`]}>
		                  <img src={data.image} alt="" />
		                  <div className={styles[`${PrefixCls}-progre-imgbox-mask`]}>
		                    {`已学:${data.time}`}
		                  </div>
		                </div>
		                <div className={styles[`${PrefixCls}-progre-info`]}>
		                  <div className={styles[`${PrefixCls}-progre-info-title`]}>{data.title}</div>
		                  <Progress percent={34} position='normal' />已学:34%
		                </div>
		              </div>);
		            })
		          }
		        </List>	 	
	 )
  },
  noteRow: (data,Click,index) => {
  /*WKC 课程列表进度条版*/
	 return(
		        <List className={styles[`${PrefixCls}-progre`]}>
		          {
		            data && data.map((data) => {
		              return (<div className={styles[`${PrefixCls}-progre-item`]} onClick={Click.bind(this)}>
		                <div className={styles[`${PrefixCls}-progre-imgbox`]}>
		                  <img src={data.image} alt="" />
		                  <div className={styles[`${PrefixCls}-progre-imgbox-mask`]}>
		                    {`已学:${data.time}`}
		                  </div>
		                </div>
		                <div className={styles[`${PrefixCls}-progre-info`]}>
		                  <div className={styles[`${PrefixCls}-progre-info-title`]}>{data.title}</div>
		                  {data.yep ? 
		                  	(<Button activeStyle={false} type="primary" size="small" style={{ margin:'0 30% 0 30%' }}>尚未学完</Button>)
		                  	:(<Button activeStyle={false} type="warning" size="small" style={{ margin:'0 30% 0 30%' }}>已学完</Button>)
		                  }
		                </div>
		              </div>);
		            })
		          }
		        </List>	 	
	 )
  },
  chapterTRow: ({ title, time,yep, id }, onClick) => {
    /**
     WKC 课程作业完成情况列表
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
        {
        	yep ?  <div className={styles[`${PrefixCls}-chapter-outer-right-W`]} style={{background:'dodgerblue'}}>
				          {time}
				        </div> : <div className={styles[`${PrefixCls}-chapter-outer-right-W`]} style={{background:'red'}}>
				          {time}
				        </div>
        }

      </div>
    )
  },
};

