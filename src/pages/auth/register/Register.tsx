import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../../component/header/Header'
import { convertFileToBase64 } from '../../../service/convertFileToBase64'
import styles from './Register.module.css'

export function Register() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [userIcon, setUserIcon] = useState<File | null>(null)
	const [error, setError] = useState<string | null>(null)
	const navigate = useNavigate()

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault()

		if (!username || !password || !email) {
			setError('Please fill in all fields.')
			return
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			setError('Please enter a valid email.')
			return
		}

		let userIconBase64 = null
		if (userIcon) {
			try {
				userIconBase64 = await convertFileToBase64(userIcon)
			} catch (error) {
				console.error('Error converting file to Base64:', error)
				setError('Error converting file to Base64.')
				return
			}
		}

		const data = {
			username,
			password,
			email,
			userIconToBase64: userIconBase64,
		}

		try {
			const response = await axios.post(
				'http://192.168.0.153:8080/app/auth/register',
				data,
				{
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				}
			)

			if (response.status === 200) navigate('/account')

			console.log('User registered successfully:', response.data)
			setError(null)
		} catch (error) {
			console.error('Error during registration:', error)
			setError('Registration failed. Please try again.')
		}
	}

	return (
		<>
			<Header />
			<section className={styles.registerContainer}>
				<form className={styles.registerForm} onSubmit={handleSubmit}>
					<h2>Register</h2>
					{error && <div className={styles.error}>{error}</div>}

					<input
						type='text'
						name='username'
						placeholder='Username'
						value={username}
						onChange={e => setUsername(e.target.value)}
						className={styles.input}
					/>
					<input
						type='password'
						name='password'
						placeholder='Password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						className={styles.input}
					/>
					<input
						type='email'
						name='email'
						placeholder='Email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						className={styles.input}
					/>
					<input
						type='file'
						name='userIconToBase64'
						onChange={e => {
							if (e.target.files) setUserIcon(e.target.files[0])
						}}
						className={styles.inputFile}
					/>
					<button type='submit' className={styles.submitButton}>
						Register
					</button>
					<p onClick={() => navigate('/authenticate')}>Have account?</p>
				</form>
			</section>
		</>
	)
}
