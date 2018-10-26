/**
 * @author Lowkey
 * @date 2018/10/26
 * @Description: 人比黄花瘦
 */
import React from 'react'
import { connect } from 'dva'
import { WhiteSpace } from 'components'
import Nav from 'components/nav'
import { gradeRow } from 'components/row'
import styles from './index.less'

const PrefixCls = 'gradedetails'
const GradeDetails = ({ dispatch, gradedetails }) => {
  const { data } = gradedetails
  console.log(data)
  return (
    <div className={styles[`${PrefixCls}-outer`]}>
      <Nav title='评价' dispatch={dispatch} color='#fff'/>
      <div>
        {
          cnIsArray(data) && data.map(item => (gradeRow(item)))
        }
      </div>
    </div>
  )
}
export default connect(({ loading, gradedetails }) => ({
  loading,
  gradedetails,
}))(GradeDetails)
