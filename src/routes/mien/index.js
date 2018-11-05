/* WKC
教师风采列表 */
import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'components/nav'
import TitleBox from 'components/titlecontainer'
import { exhibition } from 'components/row'
import { connect } from 'dva'
import { getLocalIcon, handleBuildingClick, handleGridClick } from 'utils'

class Mien extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { data } = this.props.mien
    return (
      <div dispatch={this.props.dispatch}>
        {exhibition(data)}
      </div>
    )
  }
}


export default connect(({ mien }) => ({
  mien,
}))(Mien)
