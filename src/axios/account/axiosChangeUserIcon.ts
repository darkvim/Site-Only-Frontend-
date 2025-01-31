import axios from 'axios'

export const handleChangeUserIcon = async (
	imageToBase64: string,
	fileName: string
) => {
	try {
		const response = await axios.patch(
			'http://192.168.0.153:8080/api/v1/users/changeIcon',
			{ imageToBase64, fileName },
			{
				withCredentials: true,
				headers: { 'Content-Type': 'application/json' },
			}
		)
		console.log('RESULT OF CHANGED USER ICON: ', response)
	} catch (error) {
		console.error(error)
	}
}
