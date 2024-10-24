import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Tabs, Form, Button, message } from 'antd';
import Flex from 'components/shared-components/Flex';
import projectData from "assets/data/project-data.json";
import JenisClashField from './JenisClashField';
import FirestoreService from 'services/FirestoreService';
import { useNavigate } from 'react-router-dom';

const ADD = 'ADD'
const EDIT = 'EDIT'

const JenisClashForm = props => {

	const { mode = ADD, param } = props
	const navigate = useNavigate();

	const initialValues = {
		namaJenisClash: '',
		ketJenisClash: ''
	  };

	const [form] = Form.useForm();
	const [submitLoading, setSubmitLoading] = useState(false)

	useEffect(() => {
		if(mode === EDIT) {
			const { id } = param
			const produtId = parseInt(id)
			const productData = projectData.filter( product => product.id === produtId)
			const product = productData[0]
			form.setFieldsValue({
				projectName: product.projectName,
				projectLocation: product.projectLocation,
				projectType: product.projectType,
				owner: product.owner,
				contractor: product.contractor,
				subcontractor: product.subcontractor
			});
		}
	}, [form, mode, param, props]);

	const onReset = () => {
		form.resetFields();
	  };

	const onFinish = () => {
		setSubmitLoading(true)
		form.validateFields().then(values => {
			setTimeout(() => {
				setSubmitLoading(false)
				if(mode === ADD) {
					message.success(`Created ${values.namaJenisClash} to project list`);
					navigate('/app/input-option/jenis-clash/jenis-clash-list');
				}
				if(mode === EDIT) {
					message.success(`Product saved`);
					navigate('/app/input-option/jenis-clash/jenis-clash-list');
				}
			}, 1500);
		}).catch(info => {
			setSubmitLoading(false)
		});
	};

	const handleFinish = async (values) => {
		try {
		  const docId = await FirestoreService.createDocument('jenisClash', values);
		  message.success(`Jenis Clash created with ID: ${docId}`);
		  form.resetFields();
		  onFinish();
		} catch (error) {
		  message.error('Error creating Jenis Clash: ' + error.message);
		}
	  };

	return (
		<>
			<Form
				layout="vertical"
				form={form}
				name="advanced_search"
				className="ant-advanced-search-form"
				initialValues={initialValues}
				onFinish={handleFinish}
			>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="space-between" alignItems="center">
							<h2 className="mb-3">{mode === 'ADD'? 'Add New Jenis Clash' : `Edit Jenis Clash`} </h2>
							<div className="mb-3">
								<Button className="mr-2" onClick={onReset}>Discard</Button>
								<Button type="primary" onClick={() => onFinish()} htmlType="submit" loading={submitLoading} >
									{mode === 'ADD'? 'Add' : `Save`}
								</Button>
							</div>
						</Flex>
					</div>
				</PageHeaderAlt>
				<div className="container">
					<Tabs 
						defaultActiveKey="1" 
						style={{marginTop: 30}}
						items={[
							{
								label: 'Project Field',
								key: '1',
								children: <JenisClashField />,
							}
						]}
					/>
				</div>
			</Form>
		</>
	)
}

export default JenisClashForm
