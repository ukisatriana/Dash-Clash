import React from 'react'
import { Input, Row, Col, Card, Form } from 'antd';


const rules = {
	kategoriClash: [
		{
			required: true,
			message: 'Please enter Nama Kategori Clash',
		}
	],
	ketKategoriClash: [
		{
			required: true,
			message: 'Please enter Keterangan Kategori Clash',
		}
	],
}


const KategoriClashField = () => {
	return (
		<Card title="Jenis Clash">
			<Row gutter={16}>
				<Col span={24}>
                    <Form.Item name="kategoriClash" label="Nama Kateori Clash" rules={rules.kategoriClash}>
					    <Input placeholder="Enter Kategori Clash" />
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="ketKategoriClash" label="Keterangan Kategori Clash" rules={rules.ketKategoriClash}>
					    <Input placeholder="Enter Kategori Clash" />
				    </Form.Item>
				</Col>
			</Row>
		</Card>
	)
}

export default KategoriClashField
