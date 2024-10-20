import React from 'react'
import { Input, Row, Col, Card, Form, Select } from 'antd';

const { Option } = Select;

const rules = {
	projectName: [
		{
			required: true,
			message: 'Please enter project name',
		}
	],
	projectLocation: [
		{
			required: true,
			message: 'Please enter project location',
		}
	],
	projectType: [
		{
			required: true,
			message: 'Please enter project type',
		}
	],
	divisi: [
		{
			required: true,
			message: 'Please select Divisi',
		}
	],
	managerProyek: [
		{
			required: true,
			message: 'Please enter Manager Proyek',
		}
	],
	kontakMP: [
		{
			required: true,
			message: 'Please enter Kontak MP',
		}
	],
	picBIM: [
		{
			required: true,
			message: 'Please enter Pic BIM',
		}
	],
}

const divisiList = ['BOVRS', 'INFRA1', 'INFRA2', 'EPCC']

const ProjectField = () => {
	return (
		<Card title="Project">
			<Row gutter={16}>
				<Col span={24}>
                    <Form.Item name="projectName" label="Project Name" rules={rules.projectName}>
					    <Input placeholder="Enter Project Name" />
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="projectLocation" label="Project Location" rules={rules.projectLocation}>
					    <Input placeholder="Enter Project Location" />
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="projectType" label="Project Type" rules={rules.projectType}>
					    <Input placeholder="Enter Project Type" />
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="divisi" label="Divisi" rules={rules.divisi}>
						<Select className="w-100" placeholder="Divisi">
							{
								divisiList.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
                    </Form.Item>
				</Col>
				<Col span={24}>
                    <Form.Item name="managerProyek" label="Manager Proyek" rules={rules.managerProyek}>
					    <Input placeholder="Enter Manager Proyek" />
				    </Form.Item>
				</Col>
				<Col span={24}>
                    <Form.Item name="kontakMP" label="Kontak MP" rules={rules.kontakMP}>
					    <Input placeholder="Enter Kontak MP" />
				    </Form.Item>
				</Col>
				<Col span={24}>
                    <Form.Item name="picBIM" label="PIC BIM" rules={rules.picBIM}>
					    <Input placeholder="Enter Pic BIM" />
				    </Form.Item>
				</Col>
                

			</Row>
           

		</Card>
	)
}

export default ProjectField
