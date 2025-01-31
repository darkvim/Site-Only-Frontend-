import { useState } from 'react'
import { Header } from '../../component/header/Header'
import { CreatePostForm } from './create/CreatePostForm'
import { RenderAllPosts } from './render/RenderAllPosts'

export function Posts() {
	const [postList, setPostList] = useState<boolean>(true)

	return (
		<>
			<Header />
			<CreatePostForm />
			<span onClick={() => setPostList(!postList)}>List</span>
			<span onClick={() => setPostList(!postList)}>Icon</span>

			<RenderAllPosts postList={postList} />
		</>
	)
}
