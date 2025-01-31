import { useEffect, useState } from 'react'
import { axiosPostsInfo } from '../../../../../axios/account/axiosAccountInfo'
import { IPostProps } from '../../../../../types/post/IPostProps'

import styles from './UserPosts.module.css'
import { FilteredPosts } from './filtered_posts/FilteredPosts'

export function UserPosts() {
	const [postProps, setPostProps] = useState<IPostProps[] | null>(null)
	const [showIcons, setShowIcons] = useState<boolean>(true)
	const [searchQuery, setSearchQuery] = useState<string>('')

	useEffect(() => {
		const fetchAllPosts = async () => {
			await axiosPostsInfo({ setPostProps })
		}
		fetchAllPosts()
	}, [])

	return (
		<section className={styles.postDataContainer}>
			<div className={styles.toolbarIcons}>
				<span onClick={() => setShowIcons(true)}>Show items as icons</span>
				<span onClick={() => setShowIcons(false)}>Show items in a list</span>
			</div>
			<div className={styles.accountSearchContainer}>
				<input
					type='search'
					value={searchQuery}
					onChange={event => setSearchQuery(event.target.value)}
					name='search'
					placeholder='Search'
				/>
			</div>
			<FilteredPosts
				searchQuery={searchQuery}
				showIcons={showIcons}
				postProps={postProps}
			/>
		</section>
	)
}
