import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Table,Input,Modal,Spin} from 'antd';
import {list} from '../../../untils/service';
import {Bcrumb} from '../../components/bcrumb/bcrumb';
import './home.scss';
const Search = Input.Search;
const confirm = Modal.confirm;
class Home extends Component{
	constructor(props) {
		super(props);
		this.columns=[{
		  title: '电影名字',
		  dataIndex: 'title'
		}, {
		  title: '导演',
		  dataIndex: 'directors',
		   width:'20%',
		  render:(text,record,index)=>(
		  	<div className='director'>{
		  		text.map((item,key)=>{
		  			return (
		  				<span key={key}>
		  				{item.name}
		  				</span>
		  				)		
		  		})
		  	}
		  	</div>
		  	)		  	
		},{
		  title: '主演',
		  dataIndex: 'casts',
		  width:'30%',
		  render:(text,record,index)=>(
		  		<div className='cast'>{
		  			text.map((item,key)=>{
			  			return (
			  				<span key={key}>
			  				 {item.name}
			  				</span>
			  				)		
			  		})
		  		}
		  		</div>
		  	)
		},{
		  title: '上映时间',
		  dataIndex: 'mainland_pubdate'
		}, {
		  title: '时长',
		  dataIndex: 'durations[0]'
		},{
		  title: '操作',
		  key: 'action',
		  render:(text,record)=>(
		  	<span>
		  		<a onClick={this.showDeleteConfirm}>删除</a>
		  		<span className="ant-divider" />
		  		<Link to='/one/page1'>详情</Link>
		  	</span>
		  )
		}];
		this.state={
			tableData:[],
			pagination: {},
			loading:false,
			data:{
				apikey:'0b2bdeda43b5688921839c8ecb20399b',
				city:'杭州',
				start:0,
				count:10
			}
		}
	}
	componentDidMount() {
		this.setState({loading:true})
		this.initData(this.state.data);
	}
	async initData (prams){
		let listData = await list(prams);
		const pagination={...this.state.pagination};
		pagination.total=listData.data.total;
		this.setState({
			tableData:listData.data.subjects,
			loading:false,
			pagination
		});
	}
	onSlectChange(selectedRowKeys, selectedRows){
		 console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	}
	handleTableChange=(pagination)=>{
		console.log(pagination.current);
		const data ={...this.state.data};
		data.start=pagination.current-1;
		this.setState({
			loading:true,
			data:data
		})
		this.initData(this.state.data);
	}
	search(value){
		console.log(value);
	}
	showDeleteConfirm=()=>{
		confirm({
	    title: '确定删除这项内容?',
	    content: 'Some descriptions',
	    okText: '确定',
	    okType: 'danger',
	    cancelText: '取消',
	    onOk() {
	      console.log('OK');
	    },
	    onCancel() {
	      console.log('Cancel');
	    },
	  });
	}
	render() {
		const rowSelection={
			onChange:this.onSlectChange.bind(this)
		}
		return(
			<div className='home-container'>
				<Bcrumb title='home' icon='laptop'/>
				<div className='home'>
					<Search
					className='search-dom'
				    placeholder="搜索"
				    style={{ width: 200 }}
				    onSearch={(value)=>this.search(value)}
				  />
				  <Spin spinning={this.state.loading}>
					<Table 
					rowSelection={rowSelection} 
					dataSource={this.state.tableData} 
					columns={this.columns}
					rowKey={record => record.id}
					pagination={this.state.pagination}
					 onChange={this.handleTableChange}
					>
					</Table>
					</Spin>
				</div>
			</div>
		) 
	}
	
}
export default Home