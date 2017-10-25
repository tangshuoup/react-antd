import React,{Component} from 'react';
import {Bcrumb} from '../../components/bcrumb/bcrumb';
class Page1 extends Component{
	render() {
		return(
			<div className='page1-container'>
				<Bcrumb title='page1' icon='windows'/>
				<div className='page1'>
					page1
				</div>
			</div>
		)
	}
}

export default Page1;