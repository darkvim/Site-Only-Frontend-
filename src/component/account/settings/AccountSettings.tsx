import { useEffect, useRef, useState } from 'react'
import { handleUpdateUserData } from '../../../axios/account/axiosChangeUserLoginAndEmail'
import { handleFileChange } from '../../../service/post/handleFileChanges'
import { IUpdateUserData } from '../../../types/account/IUserData'
import { AccountSettingsProps } from '../../../types/account/settings/AccountSettingsProps'
import styles from './AccountSettings.module.css'

export function AccountSettings({ setShowSettings }: AccountSettingsProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const fileInputRef = useRef<HTMLInputElement>(null)

	const [formData, setFormData] = useState<IUpdateUserData>({
		username: '',
		email: '',
		oldPassword: '',
		newPassword: '',
	})

	const handleClickOutside = (event: MouseEvent) => {
		if (
			containerRef.current &&
			!containerRef.current.contains(event.target as Node)
		) {
			setShowSettings(false)
		}
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
		console.log(formData)
	}

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		handleUpdateUserData(formData)
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<>
			<div className={styles.overlay}></div>
			<div ref={containerRef} className={styles.accountSettingsContainer}>
				<form onSubmit={handleSubmit}>
					<input
						placeholder='Set your a new username'
						type='text'
						name='username'
						id='username'
						value={formData.username || ''}
						onChange={handleChange}
					/>
					<input
						placeholder='Set your a new email'
						type='email'
						name='email'
						id='email'
						value={formData.email || ''}
						onChange={handleChange}
					/>
					<input
						placeholder='Set your a old password'
						type='password'
						name='oldPassword'
						value={formData.oldPassword || ''}
						onChange={handleChange}
						id='password'
					/>
					<input
						placeholder='Set your a new password'
						type='password'
						name='newPassword'
						value={formData.newPassword || ''}
						onChange={handleChange}
						id='password'
					/>
					<label htmlFor='userIcon'>Change Icon</label>
					<input
						onChange={handleFileChange}
						ref={fileInputRef}
						type='file'
						name='imageToBase64'
						id='userIcon'
					/>
					<button type='submit'>Change data</button>
				</form>
			</div>
		</>
	)
}
