import React, {useState} from 'react'
import { Card, Table, Input, Button, Menu } from 'antd';
import projectData from "assets/data/project-data.json";
import { EditOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex';
import { useNavigate } from "react-router-dom";
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

const StatusValidasiList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState(projectData)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

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
	
	const addStatusValidasi = () => {
		navigate(`/app/input-option/status-validasi/status-validasi-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/input-option/status-validasi/status-validasi-edit/${row.id}`)
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
	}

	const tableColumns = [
		{
			title: 'ID',
			dataIndex: 'id'
		},
		{
			title: 'Nama Valdasi Clash',
			dataIndex: 'kategoriClash',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'kategoriClash')
		},
		{
			title: 'Ket Validasi Clash',
			dataIndex: 'ketKategoriClash',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ketKategoriClash')
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
		const searchArray = e.currentTarget.value? list : projectData
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
					<Button onClick={addStatusValidasi} type="primary" icon={<PlusCircleOutlined />} block>Add Validasi Clash</Button>
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

export default StatusValidasiList
