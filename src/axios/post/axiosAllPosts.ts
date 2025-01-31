import axios from 'axios'
import { IPostProps } from '../../types/post/IPostProps'

export const getAllPosts = async (): Promise<IPostProps[]> => {
	const response = await axios.get('http://192.168.0.153:8080/api/v1/posts/all')
	return response.data.response
}
