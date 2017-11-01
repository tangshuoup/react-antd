import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from '../action/action';
import '../style/header.scss';
const mapStateToProps = state =>({
	headData:state.head
});
const mapDispatchToProps = dispatch =>({
	actions:bindActionCreators(actions,dispatch)
})
class Rheader extends Component{
	render() {
		let {headData,actions}  =this.props
		console.log(this.props);
		return(
			<div className='header-container' onClick={actions.headclick}>
				{headData.text}
			
			</div>
			)
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Rheader)