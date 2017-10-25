import React,{Component} from 'react';
import { Spin } from 'antd';

export default function Loading(props){
	if(props.isLoading){
		if(props.timeOut){
			return <div>Loader timed out!</div>;
		} else if(props.pastDelay){
			return <Spin/>;
		}else {
			return null;
		}
	}else if(props.error){
		return <div>Error! Component failed to load</div>
	}else {
		return null;
	}
}