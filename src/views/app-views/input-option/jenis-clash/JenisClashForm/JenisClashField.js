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
	return (
		<Card title="Jenis Clash">
			<Row gutter={16}>
				<Col span={24}>
                    <Form.Item name="jenisClash" label="Jenis Clash" rules={rules.jenisClash}>
					    <Input placeholder="Enter Jenis Clash" />
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="ketJenisClash" label="Keterangan Jenis Clash" rules={rules.ketJenisClash}>
					    <Input placeholder="Enter Project Location" />
				    </Form.Item>
				</Col>
			</Row>
		</Card>
	)
}

export default JenisClashField
