import React,{Component} from 'react';
import {Icon} from 'antd';
import {NavLink} from 'react-router-dom';
import '../style/menu.scss';
class Rmenu extends Component{
	render() {
		return(
			<div className='menu-container'>
				<div className='menu-top'>
					Learn React 
				</div>
			    <NavLink to='/home'>
					<div className='menu-item'>
						<div className='title'>
							<Icon style={{ fontSize: 16, color: '#fff' }} type="home" />
							<span>首页</span>
						</div>
					</div>
				</NavLink>
				<div className='subMenu'>
					<div className='menu-item'>
						<div className='title'>
							<Icon style={{ fontSize: 16, color: '#fff' }} type="windows" />
							<span>选项一</span>
						</div>
					</div>
					<div className='menu-group'>
						<NavLink to='/one/page1'>
							<div className='menu-item'>
								<div className='title'>			
									<span>page1</span>					
								</div>
							</div>
						</NavLink>
						<div className='menu-item'>
							<div className='title'>
								<span>page2</span>
							</div>
						</div>
					</div>
				</div>
				<div className='subMenu'>
					<div className='menu-item'>
						<div className='title'>
							<Icon style={{ fontSize: 16, color: '#fff' }} type="github" />
							<span>选项二</span>
						</div>
					</div>
					<div className='menu-group'>
						<div className='menu-item'>
							<div className='title'>
								<span>page3</span>
							</div>
						</div>
						<div className='menu-item'>
							<div className='title'>
								<span>page4</span>
							</div>
						</div>
					</div>
				</div>
				<div className='subMenu'>
					<div className='menu-item'>
						<div className='title'>
							<Icon style={{ fontSize: 16, color: '#fff' }} type="apple" />
							<span>选项三</span>
						</div>
					</div>
					<div className='menu-group'>
						<div className='menu-item'>
							<div className='title'>
								<span>page5</span>
							</div>
						</div>
						<div className='menu-item'>
							<div className='title'>
								<span>page6</span>
							</div>
						</div>
					</div>
				</div>	
			</div>
			)
	}
}
export default Rmenu