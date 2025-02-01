import image from '/images/image_8.jpeg'

import styles from './SearchSuggestions.module.css'

export function SearchSuggestions(darkCover: boolean) {
	return (
		<section
			className={
				darkCover
					? `${styles.search_suggestions_container} ${styles.darkCover}`
					: ''
			}
		>
			<div>
				<img src={image} alt='image' />
				<h1>Title</h1>
			</div>

			<div>
				<img src={image} alt='image' />
				<h1>Title</h1>
			</div>

			<div>
				<img src={image} alt='image' />
				<h1>Title</h1>
			</div>

			<div>
				<img src={image} alt='image' />
				<h1>Title</h1>
			</div>
		</section>
	)
}
