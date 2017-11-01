import React,{Component} from 'react';
import Echarts from '../../components/echarts/echarts';
import {Bcrumb} from '../../components/bcrumb/bcrumb';
class Page1 extends Component{
	constructor(props) {
		super(props);
		   		
	}
	getOtion(){
		var lineData=[0,34,23,76,45,45,98,65,74,34,26,35],
			monthData=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
		let lineOption = {
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['股票走势']
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		           
		            boundaryGap : false,
		            data : monthData,
		            axisLabel: {
	                    show: true,//是否显示刻度标签
	                    interval:0,//横轴信息全部显示
	                    textStyle: {
	                        fontSize: 8,
	                    }
	                }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'股票走势',
		            type:'bar',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:lineData
		        }
		    ]
		};
		return lineOption
	}
	render() {
		return(
			<div className='page1-container'>
				<Bcrumb title='page1' icon='windows'/>
				<div className='page1'>
					<Echarts option={this.getOtion()} />
				</div>
			</div>
		)
	}
}

export default Page1;