import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { withDrawFromAccount } from '../../../../../axios/account/axiosWithDrawFromAccount'
import { AccountSettings } from '../../../settings/AccountSettings'

import { axiosCurrentUser } from '../../../../../axios/account/axiosAccountInfo'
import { handleFileChange } from '../../../../../service/post/handleFileChanges'
import { IUserData } from '../../../../../types/account/IUserData'
import { AccountButton } from '../../../../button/AccountButton'
import styles from './AccountData.module.css'
import { UserInfo } from './UserInfo/UserInfo'

export function AccountData() {
	const [showSettings, setShowSettings] = useState<boolean>(false)
	const [userData, setUserData] = useState<IUserData | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	const fileInputRef = useRef<HTMLInputElement>(null)
	const navigate = useNavigate()

	const handleChangeUserIconInput = () => {
		fileInputRef.current?.click()
	}

	useEffect(() => {
		const timeoutId = setTimeout(async () => {
			const responseStatus = await axiosCurrentUser({ setUserData, setLoading })

			if (responseStatus === 500) navigate('/authenticate')
		}, 300)
		return () => clearTimeout(timeoutId)
	}, [navigate])

	if (!userData) return <div className={styles.noData}>No user data found</div>
	if (loading) return <div className={styles.loading}>Loading...</div>

	return (
		<section className={styles.user_data}>
			<img
				onClick={handleChangeUserIconInput}
				src={userData.urlToUserIcon}
				alt='User Icon'
			/>

			<input
				type='file'
				ref={fileInputRef}
				style={{ display: 'none' }}
				accept='image/*'
				onChange={handleFileChange}
			/>

			<UserInfo username={userData.username} email={userData.email} />

			<AccountButton
				onClickFunc={() => {
					withDrawFromAccount()
					navigate('/')
				}}
				type='button'
				className={`${styles.account_button} ${styles.exitButton}`}
				text='Exit'
			/>

			<AccountButton
				onClickFunc={() => setShowSettings(!showSettings)}
				type='button'
				className={`${styles.account_button} ${styles.settingsButton}`}
				text='Settings'
			/>

			{showSettings && <AccountSettings setShowSettings={setShowSettings} />}
		</section>
	)
}
