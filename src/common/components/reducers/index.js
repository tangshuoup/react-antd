import {combineReducers} from 'redux';

import headReducer from './headReducer';

const rootReducer = combineReducers({
	head:headReducer
})

export default rootReducer;