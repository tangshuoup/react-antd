import React,{Component} from 'react';
import PropTypes from 'prop-types';
import echarts  from 'echarts'
export default class Echarts extends Component{
	constructor(props) {
		super(props);
		
	}
	componentDidMount(){
		this.initCharts();
	}
	initCharts(){
		   var myChart = echarts.init(document.getElementById('charts'));
        // 指定图表的配置项和数据
        
       
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.props.option);
        window.addEventListener('resize', function () {
			myChart.resize();
		});
	}
	render() {
		return(
			<div id='charts' style={{height:'500px'}}></div>
			)
	}

}
Echarts.PropTypes={
	option:PropTypes.object.isRequired
}
