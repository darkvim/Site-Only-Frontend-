import { useState } from 'react'
import { handleSubmit } from '../../../service/post/handleSubmitPost'

import { NonAuthenticatedUser } from '../../../component/non_authenticated_user/NonAuthenticatedUser'
import styles from './CreatePostForm.module.css'

export function CreatePostForm() {
	const [title, setTitle] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [postIcon, setPostIcon] = useState<File | null>(null)

	const [responseError, setResponseError] = useState<boolean>(false)

	return (
		<section className={styles.createPostContainer}>
			<form
				onSubmit={async event => {
					const createPostResponse = await handleSubmit(event, {
						title,
						description,
						postIcon,
					})
					if (
						createPostResponse &&
						createPostResponse.response === 'User not found'
					) {
						setResponseError(true)
						console.log(responseError)
					}
				}}
			>
				<input
					onChange={e => setTitle(e.target.value)}
					type='text'
					name='title'
					placeholder='title'
				/>
				<textarea
					onChange={e => setDescription(e.target.value)}
					name='description'
					placeholder='description'
				/>
				<input
					onChange={e => {
						if (e.target.files) setPostIcon(e.target.files[0])
					}}
					type='file'
					name='imageToBase64'
				/>
				<button type='submit'>Submit</button>

				{responseError && <NonAuthenticatedUser message='create post' />}
			</form>
		</section>
	)
}
