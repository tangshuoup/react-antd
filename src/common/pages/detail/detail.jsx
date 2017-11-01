import React,{Component} from 'react';
import { Spin } from 'antd';
import {listDetails} from '../../../untils/service.js';
import './detail.scss'
class Detail extends Component{
	constructor(props) {
		super(props);
		this.state={
			detailData:{},
			loading:true,
			id:this.props.match.params.id
		}
		console.log(this.props);
	}
	componentDidMount(){
		this.initData(this.state.id);
	}
	async initData(data){
		let detailData = await listDetails(data);
		this.setState({
			detailData:detailData.data,
			loading:false
		})
		console.log(detailData);
	}
	render() {
		let {detailData} =this.state;
		const url =detailData.images
		
		return (
			<Spin spinning={this.state.loading}>
				<div className='detail'>
					<img src={this.state.loading?'':url.large}/>
					<span>{detailData.summary}</span>	
				</div>
			</Spin>	
			)
	}
}
export default Detail