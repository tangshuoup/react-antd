import React,{Component} from 'react';
import {Form,Icon,Input,Button,Checkbox} from 'antd';
import './login.scss'
import logo from './logo.png';
const FormItem = Form.Item;
class Login extends Component{
	constructor(props) {
		super(props);
		
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
	      if (!err) {
	       this.props.history.push('/home')
	      }
	    });
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return(
		  <div className="App-container">
		  	<header className="App-header">
	          	<img src={logo} className="App-logo" alt="logo" />
	            <h1 className="App-title">React Entry</h1>
        	</header>
			<div className='login-container'>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem>
					{getFieldDecorator('userName', 
						{rules: [{ required: true, message: 'Please input your username!' }],})(
						<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
					)}
					</FormItem>
					<FormItem>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }],
					})(
						<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
					)}
					</FormItem>
					<FormItem>
					{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					})(
					<Checkbox className='rememberMe'>Remember me</Checkbox>
					)}
					<a className="login-form-forgot" href="">Forgot password</a>
					<Button type="primary" htmlType="submit" className="login-form-button">
					Log in
					</Button>
					Or <a href="">register now!</a>
					</FormItem>
				</Form>	
			</div>
		  </div>
	 	) 
	}
	
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm