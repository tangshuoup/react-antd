import React,{Component} from 'react';
import {Breadcrumb,Icon} from 'antd';
import { Link } from 'react-router-dom';
export class Bcrumb extends Component{
	constructor(props) {
		super(props);
		
	}
	render() {
		return(
			<Breadcrumb style={{textAlign:'left'}}>
				<Breadcrumb.Item >
				<Link to='/home'>
					<Icon type='home'/>
					<span>主页</span>
				</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item>
					<Icon type={this.props.icon}/>
					<span>{this.props.title}</span>
				</Breadcrumb.Item>
			</Breadcrumb>

			)
	}
}