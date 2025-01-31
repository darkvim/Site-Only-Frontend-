import { useEffect, useState } from 'react'
import { getAllPosts } from '../../../axios/post/axiosAllPosts'
import { IPostProps } from '../../../types/post/IPostProps'

import { IRenderAllPostList } from '../../../types/post/IRenderAllPostList'
import styles from './RenderAllPosts.module.css'

export function RenderAllPosts({ postList }: IRenderAllPostList) {
	const [allPosts, setAllPosts] = useState<IPostProps[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const posts = await getAllPosts()
				setAllPosts(posts)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}
		fetchPosts()
	}, [])

	if (loading) return <div>Loading...</div>
	console.log(allPosts)
	return (
		<section className={postList ? styles.postContainer : styles.postDataList}>
			<ul>
				{allPosts.length === 0 ? (
					<li>No posts available</li>
				) : (
					allPosts.map(post => (
						<li key={post.id}>
							<p>{post.description}</p>
							<h3>{post.title}</h3>
							<img src={post.httpUrl} alt='post_image' />
						</li>
					))
				)}
			</ul>
		</section>
	)
}
