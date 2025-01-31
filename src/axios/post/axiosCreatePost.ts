import axios, { AxiosResponse } from 'axios'

export interface IPostRequestProps {
	title: string
	description: string
	imageToBase64: string | null
}

export const createPost = async ({
	title,
	description,
	imageToBase64,
}: IPostRequestProps) => {
	try {
		const response: AxiosResponse = await axios.post(
			'http://192.168.0.153:8080/api/v1/posts/create',
			{
				title,
				description,
				imageToBase64,
			},
			{
				withCredentials: true,
				headers: { 'Content-Type': 'application/json' },
			}
		)
		return response.data
	} catch (error) {
		throw error
	}
}
