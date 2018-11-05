import React from 'react'
import PropTypes from 'prop-types'
import Nav from 'components/nav'
import { connect } from 'dva'
import { List, Accordion,Layout } from 'components'
import { chapterTRow } from 'components/row'
import styles from './index.less'

const PrefixCls = 'courselist'
const { BaseLine } = Layout

class JobList extends React.Component {
    constructor(props){
        super(props)
    }  
    
    render(){
    	const { name="" } = this.props.location.query
    	const { row } = this.props.jobList
        return(
            <div>
                <Nav title={name} dispatch={this.props.dispatch}/>
                <div className={styles[`${PrefixCls}-outer`]}>
			      <Accordion defaultActiveKey="0" className={styles[`${PrefixCls}-accordion`]}>
			        {
			          row.map((d, i) => {
			            return <Accordion.Panel header={d.section}>
			              {d.part && d.part.map((p, i) => (
			                chapterTRow(p)
			              ))}
			            </Accordion.Panel>
			          })
			        }
			      </Accordion>
			    </div>
			    <BaseLine />
            </div>
        )
    }
}

export default connect(({ jobList }) => ({
    jobList
}))(JobList)