import axios from 'axios'
import { ISetUserData } from '../../types/account/IUserData'
import { ISetPostProps } from '../../types/post/IPostProps'

export const axiosCurrentUser = async ({
	setUserData,
	setLoading,
}: ISetUserData) => {
	try {
		const response = await axios.get(
			'http://192.168.0.153:8080/app/auth/accountInfo',
			{
				withCredentials: true,
			}
		)
		console.log(response.data.response)
		setUserData(response.data.response)
		setLoading(false)
	} catch (error) {
		console.error('Fetching error:', error)
		setLoading(false)
		return 500
	}
}

export const axiosCommentInfo = async () => {}

export const axiosPostsInfo = async ({ setPostProps }: ISetPostProps) => {
	try {
		const response = await axios.get(
			'http://192.168.0.153:8080/api/v1/posts/usersPosts',
			{
				withCredentials: true,
			}
		)

		const { data } = response
		console.log(data.response)
		setPostProps(data.response)
	} catch (error) {
		console.error(error)
		return 500
	}
}
