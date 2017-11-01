const initState = {
	text:'我是头部'
}

export default (state = initState,action)=>{
	switch(action.type){
		case 'changeHead':
			return {text:'被改变的头部'}
		default:
			return state;
	}
}