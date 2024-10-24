import React from 'react'
import { Input, Row, Col, Card, Form } from 'antd';


const rules = {
	namaStatValidasi: [
		{
			required: true,
			message: 'Please enter Nama Status Validasi',
		}
	],
	ketStatusValidasi: [
		{
			required: true,
			message: 'Please enter Keterangan Status Validasi',
		}
	],
}


const StatusValidasiField = () => {
	return (
		<Card title="Status Valiadasi">
			<Row gutter={16}>
				<Col span={24}>
                    <Form.Item name="namaStatValidasi" label="Nama Status Validasi" rules={rules.namaStatValidasi}>
					    <Input placeholder="Enter Kategori Clash" />
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="ketStatValidasi" label="Keterangan Status Validasi" rules={rules.ketStatusValidasi}>
					    <Input placeholder="Enter Kategori Clash" />
				    </Form.Item>
				</Col>
			</Row>
		</Card>
	)
}

export default StatusValidasiField
