import React from 'react';
import { Route,BrowserRouter as Router,Switch} from 'react-router-dom';//创建route所需
import Loadable from 'react-loadable';
import Loading from '../components/loading/loading';
import Layout from '../components/layout/layout';
const Login = Loadable({
	loader:()=>import ('../pages/login/login'),
	loading: Loading,
	delay: 300
});
const Home = Loadable({
	loader:()=>import ('../pages/home/home'),
	loading: Loading,
	delay: 300
});
const Page1 = Loadable({
	loader:()=>import ('../pages/page1/page1'),
	loading: Loading,
	delay: 300
});
const Detail = Loadable({
	loader:()=>import ('../pages/detail/detail.jsx'),
	loading:Loading,
	delay:300
});
let RouterMap=()=>{
	return(
		<Router>
			<Switch>
				<Route exact path='/' component={Login}>			
				</Route>
				<Layout>
					<Route path='/home' component={Home}/>
					<Route path='/one/page1' component={Page1}/>
					<Route path='/detail/:id' component={Detail}/>			
				</Layout>
			</Switch>
		</Router>	
	)
}
	
export default RouterMap