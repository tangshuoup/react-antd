import React,{Component} from 'react';
import Rfooter from './footer';
import Rheader from './header';
import Rmenu from './menu';
import {Layout} from 'antd';
import '../style/layout.scss';
const {Header,Footer,Sider,Content} = Layout;
class Main extends Component{
	constructor(props) {
		super(props);
		
	}
	render() {
		return(
				<Layout className='layout'>
					<Sider>
						<Rmenu/>
					</Sider>
					<Layout>
						<Header>
							<Rheader/>
						</Header>
						<Content  style={{ margin: '24px 16px 0' }}>
								{this.props.children}	
						</Content>
						<Footer>
							<Rfooter/>
						</Footer>
					</Layout>
				</Layout>
			)
	}
}
export default Main