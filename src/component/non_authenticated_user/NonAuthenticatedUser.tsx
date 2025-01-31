import React from 'react'
import style from './NonAuthenticatedUser.module.css'

export const NonAuthenticatedUser: React.FC<NonAuthenticatedUserMessage> = ({
	message,
}) => {
	return (
		<div className={style.redirectButtonMessageContainer}>
			<h1>You need to create account to {message}</h1>
		</div>
	)
}

type NonAuthenticatedUserMessage = {
	message: string
}
