import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Tabs, Form, Button, message } from 'antd';
import Flex from 'components/shared-components/Flex';
import projectData from "assets/data/project-data.json";
import DataClashField from './DataClashField';

// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }

const ADD = 'ADD'
const EDIT = 'EDIT'

const DataClashForm = props => {

	const { mode = ADD, param } = props

	const [form] = Form.useForm();
	// const [uploadedImg, setImage] = useState('')
	// const [uploadLoading, setUploadLoading] = useState(false)
	const [submitLoading, setSubmitLoading] = useState(false)

	useEffect(() => {
    	if(mode === EDIT) {
			console.log('is edit')
			console.log('props', props)
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
				// comparePrice: 0.00,
				// cost: 0.00,
				// taxRate: 6,
				// description: 'There are many variations of passages of Lorem Ipsum available.',
				// category: product.category,
				// name: product.name,
				// price: product.price
			});
			// setImage(product.image)
		}
  	}, [form, mode, param, props]);

	// const handleUploadChange = info => {
	// 	if (info.file.status === 'uploading') {
	// 		setUploadLoading(true)
	// 		return;
	// 	}
	// 	if (info.file.status === 'done') {
	// 		getBase64(info.file.originFileObj, imageUrl =>{
	// 			setImage(imageUrl)
	// 			setUploadLoading(true)
	// 		});
	// 	}
	// };

	const onReset = () => {
		form.resetFields();
	  };

	const onFinish = () => {
		setSubmitLoading(true)
		form.validateFields().then(values => {
			setTimeout(() => {
				setSubmitLoading(false)
				if(mode === ADD) {
					message.success(`Created ${values.name} to project list`);
				}
				if(mode === EDIT) {
					message.success(`Product saved`);
				}
			}, 1500);
		}).catch(info => {
			setSubmitLoading(false)
			console.log('info', info)
			message.error('Please enter all required field ');
		});
	};

	return (
		<>
			<Form
				layout="vertical"
				form={form}
				name="advanced_search"
				className="ant-advanced-search-form"
				initialValues={{
					heightUnit: 'cm',
					widthUnit: 'cm',
					weightUnit: 'kg'
				}}
			>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="space-between" alignItems="center">
							<h2 className="mb-3">{mode === 'ADD'? 'Add New Data Clash' : `Edit Data Clash`} </h2>
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
								label: 'Clash Summary Field',
								key: '1',
								children: <DataClashField />,
							}
							// {
							// 	label: 'Variation',
							// 	key: '2',
							// 	children: <VariationField />,
							// },
							// {
							// 	label: 'Shipping',
							// 	key: '3',
							// 	children: <ShippingField />,
							// },
							
							// {
							// 	label: 'General',
							// 	key: '4',
							// 	children: <GeneralField 
							// 		uploadedImg={uploadedImg} 
							// 		uploadLoading={uploadLoading} 
							// 		handleUploadChange={handleUploadChange}
							// 	/>,
							// },
						]}
					/>
				</div>
			</Form>
		</>
	)
}

export default DataClashForm
