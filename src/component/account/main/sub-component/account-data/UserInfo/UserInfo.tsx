import React from 'react'
import { handleCopyToClipboardWithPopUpMessage } from '../../../../../../service/copyToClipboard'
import { IUserInfo } from '../../../../../../types/account/IUserData'
import styles from './UserInfo.module.css'

export const UserInfo: React.FC<IUserInfo> = ({ username, email }) => {
	return (
		<div className={styles.user_info}>
			<h3
				onClick={e =>
					handleCopyToClipboardWithPopUpMessage(
						username,
						e.currentTarget.parentElement!,
						styles
					)
				}
			>
				{username}
			</h3>
			<p
				onClick={e =>
					handleCopyToClipboardWithPopUpMessage(
						email,
						e.currentTarget.parentElement!,
						styles
					)
				}
			>
				{email}
			</p>
		</div>
	)
}
