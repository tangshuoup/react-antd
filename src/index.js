import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './common/components/reducers/index'
import 'element-theme-default';
import './index.css';
import App from './common/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
	);
registerServiceWorker();
