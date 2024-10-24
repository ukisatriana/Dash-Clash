import React, {useEffect, useState} from 'react'
import { Card, Table, Input, Button, Menu } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex';
import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
import utils from 'utils'



// const getStockStatus = stockCount => {
// 	if(stockCount >= 10) {
// 		return <><Badge status="success" /><span>In Stock</span></>
// 	}
// 	if(stockCount < 10 && stockCount > 0) {
// 		return <><Badge status="warning" /><span>Limited Stock</span></>
// 	}
// 	if(stockCount === 0) {
// 		return <><Badge status="error" /><span>Out of Stock</span></>
// 	}
// 	return null
// }

const JenisClashList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState([]);
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	useEffect(() => {
		const fetchData = async () => {
		  try {
			const data = await FirestoreService.getDocuments('jenisClash');
			setList(data);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		fetchData();
	  }, []);

	const dropdownMenu = row => (
		<Menu>
			<Menu.Item onClick={() => viewDetails(row)}>
				<Flex alignItems="center">
					<EditOutlined />
					<span className="ml-2">Edit</span>
				</Flex>
			</Menu.Item>
			<Menu.Item onClick={() => deleteRow(row)}>
				<Flex alignItems="center">
					<DeleteOutlined />
					<span className="ml-2">{selectedRows.length > 0 ? `Delete (${selectedRows.length})` : 'Delete'}</span>
				</Flex>
			</Menu.Item>
		</Menu>
	);
	
	const addJenisClash = () => {
		navigate(`/app/input-option/jenis-clash/jenis-clash-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/input-option/jenis-clash/jenis-clash-edit/${row.id}`)
	}

	
	const deleteRow = row => {
		const objKey = 'id'
		let data = list
		if(selectedRows.length > 1) {
			selectedRows.forEach(elm => {
				data = utils.deleteArrayRow(data, objKey, elm.id)
				setList(data)
				setSelectedRows([])
			})
		} else {
			data = utils.deleteArrayRow(data, objKey, row.id)
			setList(data)
		}
	};

	const tableColumns = [
		// {
		// 	title: 'ID',
		// 	dataIndex: 'id'
		// },
		{
			title: 'No',
			dataIndex: 'no',
			render: (text, record, index) => index + 1
		},
		{
			title: 'Jenis Clash',
			dataIndex: 'namaJenisClash',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'namaJenisClash')
		},
		{
			title: 'Ket Jenis Clash',
			dataIndex: 'ketJenisClash',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ketJenisClash')
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<EllipsisDropdown menu={dropdownMenu(elm)}/>
				</div>
			)
		}
	];
	
	const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		}
	};

	const onSearch = e => {
		const value = e.currentTarget.value
		const searchArray = value ? list : [];
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
		setSelectedRowKeys([])
	}

	return (
		<Card>
			<Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					<div className="mr-md-3 mb-3">
						<Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
					</div>
				</Flex>
				<div>
					<Button onClick={addJenisClash} type="primary" icon={<PlusCircleOutlined />} block>Add Jenis Clash</Button>
				</div>
			</Flex>
			<div className="table-responsive">
				<Table 
					columns={tableColumns} 
					dataSource={list} 
					rowKey='id' 
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
				/>
			</div>
		</Card>
	)
}

export default JenisClashList
