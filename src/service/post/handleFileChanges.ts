import React from 'react'
import { handleChangeUserIcon } from '../../axios/account/axiosChangeUserIcon'
import { convertFileToBase64 } from '../convertFileToBase64'

export const handleFileChange = async (
	event: React.ChangeEvent<HTMLInputElement>
) => {
	const file = event.target.files?.[0]
	if (file) {
		const base64Image = await convertFileToBase64(file)
		const fileName = file.name.split('.').slice(0, -1).join('.')
		handleChangeUserIcon(base64Image, fileName)
	}
}
