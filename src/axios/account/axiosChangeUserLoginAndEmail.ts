import axios from 'axios'
import { IUpdateUserData } from '../../types/account/IUserData'

export const handleUpdateUserData = async ({
	username,
	email,
	newPassword,
	oldPassword,
}: IUpdateUserData) => {
	try {
		const updatedUser = {
			username: username,
			email: email,
			newPassword: newPassword,
			oldPassword: oldPassword,
		}

		const response = await axios.patch(
			'http://192.168.0.153:8080/api/v1/users/updateUserData',
			updatedUser,
			{
				withCredentials: true,
				headers: { 'Content-Type': 'application/json' },
			}
		)
		console.log('CHANGE USER LOGIN RESPONSE: ', response)
	} catch (error) {
		console.error(error)
	}
}
