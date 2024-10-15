import React, { useEffect, useState, setEmail, setPassword } from 'react'
import { connect } from 'react-redux'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Alert } from "antd";
import { signUp, showAuthMessage, showLoading, hideAuthMessage } from 'store/slices/authSlice';
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { render } from '@testing-library/react';

const rules = {
	email: [
		{ 
			required: true,
			message: 'Please input your email address'
		},
		{ 
			type: 'email',
			message: 'Please enter a validate email!'
		}
	],
	password: [
		{ 
			required: true,
			message: 'Please input your password'
		}
	],
	confirm: [
		{ 
			required: true,
			message: 'Please confirm your password!'
		},
		({ getFieldValue }) => ({
			validator(_, value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject('Passwords do not match!');
			},
		})
	]
}

// export const RegisterForm = (props) => {

// 	const { signUp, showLoading, token, loading, redirect, message, showMessage, hideAuthMessage, allowRedirect = true } = props
// 	const [form] = Form.useForm();

// 	const navigate = useNavigate();

// 	const onSignUp = () => {
//     	form.validateFields().then(values => {
// 			showLoading()
// 			signUp(values)
// 		}).catch(info => {
// 			console.log('Validate Failed:', info);
// 		});
// 	}

// const class RegisterForm extends React.Component {
// 		constructor(props) {
// 			super(props);
// 			this.state = {
// 				email: '',
// 				password: ''
// 			}
// 		}
// 	}

	

// 	// const handleChangeText = (e) => {
// 	// 	this.setState({
// 	// 		[e.target.id]: e.target.value
// 	// 	})
// 	// 	// console.log(e.target.id)
// 	// }


//     const handleChangeText = (e) => {
//         const { id, value } = e.target;
//         if (id === 'email') {
//             setEmail(value);
//         } else if (id === 'password') {
//             setPassword(value);
//         }
//     };

// 	const handleRegisterSubmit = ( ) => {
// 		console.log('email', this.state.email)
// 		console.log('password', this.state.password)
// 	}


// 	useEffect(() => {
// 		if (token !== null && allowRedirect) {
// 			navigate(redirect)
// 		}
// 		if (showMessage) {
// 			const timer = setTimeout(() => hideAuthMessage(), 3000)
// 			return () => {
// 				clearTimeout(timer);
// 			};
// 		}
// 	});
class RegisterForm extends React.Component {



render() {
		return (
			<>
				{/* <motion.div 
					initial={{ opacity: 0, marginBottom: 0 }} 
					animate={{ 
						opacity: showMessage ? 1 : 0,
						marginBottom: showMessage ? 20 : 0 
					}}> 
					<Alert type="error" showIcon message={message}></Alert>
				</motion.div> */}
				<Form layout="vertical" name="register-form" 
				// onFinish={onSignUp}
				>
					<Form.Item 
						// onChange={handleChangeText}
						id='email'
						name="email" 
						label="Email" 
						rules={rules.email}
						hasFeedback
					>
						<Input prefix={<MailOutlined className="text-primary" />}
						/>
					</Form.Item>
					<Form.Item 
						// onChange={handleChangeText}
						id='password'
						name="password" 
						label="Password" 
						rules={rules.password}
						hasFeedback
					>
						<Input.Password prefix={<LockOutlined className="text-primary" />}
						/>
					</Form.Item>
					<Form.Item 
						name="confirm" 
						label="ConfirmPassword" 
						rules={rules.confirm}
						hasFeedback
					>
						<Input.Password prefix={<LockOutlined className="text-primary" />}/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" block 
						// loading={loading} 
						// onClick={handleRegisterSubmit}
						>
							Sign Up
						</Button>
					</Form.Item>
				</Form>
			</>
		)
	}
}


// const mapStateToProps = ({auth}) => {
// 	const { loading, message, showMessage, token, redirect } = auth;
//   return { loading, message, showMessage, token, redirect }
// }

// const mapDispatchToProps = {
// 	signUp,
// 	showAuthMessage,
// 	hideAuthMessage,
// 	showLoading
// }

export default RegisterForm

// export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
