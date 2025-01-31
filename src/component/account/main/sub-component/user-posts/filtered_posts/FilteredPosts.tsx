import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { IFilteredPosts } from '../../../../../../types/post/IFilteredPosts'
import styles from './PostDataIcons.module.css'

import { Post } from '../post/Post'

export const FilteredPosts: React.FC<IFilteredPosts> = ({
	postProps,
	showIcons,
	searchQuery,
}) => {
	const [selectedPostId, setSelectedPost] = useState<number | null>(null)
	const [showOverlay, setShowOverlay] = useState<boolean>(false)
	// const [showComments, setShowComments] = useState<boolean>(false)

	const overlayRef = useRef<HTMLDivElement | null>(null)

	const handleClick = (id: number) => {
		if (selectedPostId === id) {
			setSelectedPost(null)
			setShowOverlay(false)
			// setShowComments(false)
		} else {
			setSelectedPost(id)
			setShowOverlay(true)
			// setShowComments(true)
		}
	}

	const filteredPosts = postProps?.filter(post =>
		post.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
	)

	const navigate = useNavigate()

	if (filteredPosts?.length === 0)
		return (
			<div id={styles.create_post_link}>
				<h1 onClick={() => navigate('/posts')}>Create Post</h1>
			</div>
		)

	return (
		<>
			{showOverlay && (
				<div
					onClick={() => {
						setSelectedPost(null)
						setShowOverlay(!showOverlay)
					}}
					className={styles.overlay_blur}
					ref={overlayRef}
				></div>
			)}

			{filteredPosts && (
				<section
					className={showIcons ? styles.post_data_icons : styles.post_data_list}
				>
					{filteredPosts.map(post => (
						<div
							onClick={() => handleClick(post.id)}
							key={post.id}
							className={selectedPostId === post.id ? styles.selected_post : ''}
						>
							<Post
								httpUrl={post.httpUrl}
								isCanBeShown
								id={post.id}
								article=''
								title={post.title}
								description={post.description}
							/>
						</div>
					))}
				</section>
			)}
		</>
	)
}
