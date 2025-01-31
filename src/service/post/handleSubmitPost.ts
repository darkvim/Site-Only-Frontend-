import { AxiosError, AxiosResponse } from 'axios'
import { createPost } from '../../axios/post/axiosCreatePost'
import { IPostData } from '../../types/post/IPostProps'
import { convertFileToBase64 } from '../convertFileToBase64'

export const handleSubmit = async (
	event: React.FormEvent,
	{ title, description, postIcon }: IPostData
) => {
	event.preventDefault()
	let postImage = null

	if (postIcon) postImage = await convertFileToBase64(postIcon)

	const post = {
		title,
		description,
		imageToBase64: postImage,
	}

	console.log('EVENT ', event)

	if (title && description) {
		try {
			const response: AxiosResponse = await createPost(post)
		} catch (e) {
			console.error('SERVER RESPONSE ', e.response.data.response)
			return e.response.data
		}
	} else {
	}
}
