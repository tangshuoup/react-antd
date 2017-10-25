import React,{Component} from 'react';
import {Table,Input,Modal} from 'antd';
import {Bcrumb} from '../../components/bcrumb/bcrumb';
import './home.scss';
const Search = Input.Search;
const confirm = Modal.confirm;
class Home extends Component{
	constructor(props) {
		super(props);
		this.columns=[{
		  title: '姓名',
		  dataIndex: 'name',
		  key: 'name',
		}, {
		  title: '年龄',
		  dataIndex: 'age',
		  key: 'age',
		}, {
		  title: '住址',
		  dataIndex: 'address',
		  key: 'address',
		},{
		  title: '操作',
		  key: 'action',
		  render:(text,record)=>(
		  	<span>
		  		<a onClick={this.showDeleteConfirm}>删除</a>
		  	</span>
		  )
		}];
		this.state={
			tableData:[{
				key:'1',
				name:'林宥嘉',
				age:42,
				address:'杭州市余杭区福鼎家园'
			},{
				key:'2',
				name:'林宥嘉',
				age:24,
				address:'杭州市余杭区福鼎家园'
			}]
		}
	}
	onSlectChange(selectedRowKeys, selectedRows){
		 console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
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
					<Table rowSelection={rowSelection} dataSource={this.state.tableData} columns={this.columns}></Table>
				</div>
			</div>
		) 
	}
	
}
export default Home