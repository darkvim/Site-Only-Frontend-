import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../../component/header/Header'
import styles from './Authenticate.module.css' // Импортируйте стили

export function Authenticate() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const data = {
		username,
		password,
	}

	const handleAuthenticate = async (event: React.FormEvent) => {
		event.preventDefault()

		try {
			const response = await axios.post(
				'http://192.168.0.153:8080/app/auth/authenticate',
				data,
				{
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				}
			)

			if (response.status === 200) navigate('/account')
		} catch (error) {
			console.error('Authentication failed:', error)
		}
	}

	return (
		<>
			<Header />
			<section className={styles.authenticateContainer}>
				<form className={styles.authenticateForm} onSubmit={handleAuthenticate}>
					<h2>Login</h2>
					<input
						onChange={event => setUsername(event.target.value)}
						type='text'
						name='username'
						placeholder='Username'
						required
					/>
					<input
						onChange={event => setPassword(event.target.value)}
						type='password'
						name='password'
						placeholder='Password'
						required
					/>
					<button type='submit'>Login</button>
					<p onClick={() => navigate('/register')}>No account?</p>
				</form>
			</section>
		</>
	)
}
