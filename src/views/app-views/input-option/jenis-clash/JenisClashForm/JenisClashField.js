import React from 'react'
import { Input, Row, Col, Card, Form } from 'antd';

const rules = {
	jenisClash: [
		{
			required: true,
			message: 'Please enter Jenis Clash',
		}
	],
	ketJenisClash: [
		{
			required: true,
			message: 'Please enter Keterangan Jenis Clash',
		}
	],
}

const JenisClashField = () => {

	const initialValues = {
		namaJenisClash: '',
		ketJenisClash: ''
	}
	
	const [values, setValues] = React.useState(initialValues);
	
function handleJenisClashChange(e) {
	const {name , value} = e.target;
		setValues({
			...values,
			[name]: value});
	} 

function handleInputChange (e) {
		const { name, value } = e.target;
		setValues({
			...values, 
			[name]: value});
		// console.log('ket Clash:', e.target.value);
	}


	return (
		<Card title="Jenis Clash">
			<Row gutter={16}>
				<Col span={24}>

					<Form.Item name="namaJenisClash" label="Jenis Clash" rules={rules.jenisClash}>
						<Input 
							type='text'
							placeholder="Enter Jenis Clash" 
							value={values.namaJenisClash}
							name="namaJenisClash"
							onChange={e => handleJenisClashChange(e)}
							/>
					</Form.Item>
				</Col>
				<Col span={24}>
					<Form.Item name="ketJenisClash" label="Keterangan Jenis Clash" rules={rules.ketJenisClash}>
						<Input
						type='text'
						placeholder="Enter Keterangan Jenis Clash"
						value={values.ketJenisClash}
						name='ketJenisClash'
						onChange={e => handleInputChange(e)}
						/>
					</Form.Item>
				</Col>
			</Row>
		</Card>
	)
}

export default JenisClashField
