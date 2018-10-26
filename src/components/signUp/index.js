import React from 'react'
import { Icon,Badge } from 'components'
import styles from './index.less'

	const PrefixCls='singUp';

class Sign extends React.Component{
	render(){
		return(
			<div>
				{
					this.props.banner && this.props.banner.map((data,index) => (
						<div className={styles[`${PrefixCls}-outer`]} onClick={this.props.handleClick}>
							<div className={styles[`${PrefixCls}-outer-head`]} style={{flex:"20%"}}>{data.head}</div>
							<div style={{flex:"60%"}} className={styles[`${PrefixCls}-bag`]}>
								<div style={{float: 'left'}}>
									<Badge text={data.badge} style={{background:'#46A3FF'}}/>
									{data.connect}
								</div>
							</div>
							<Icon type='ellipsis' style={{flex:"20%"}}/>
						</div>
					))
				}
			</div>
		)
	}
}

export default Sign