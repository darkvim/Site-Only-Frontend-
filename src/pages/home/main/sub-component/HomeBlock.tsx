import React from 'react'
import { TypeOfHomeBlock } from '../../../../types/HomeBlockTypes'

import styles from './HomeBlock.module.css'

export const HomeBlock: React.FC<TypeOfHomeBlock> = ({
	title,
	description,
	link,
	image,
	imageAlt,
}) => {
	return (
		<div className={styles.homeBlock} style={styles}>
			<h1>VERYY LOOOONG TITLEEEE {title}</h1>
			<img src={image} alt={imageAlt || 'Image description'} />
			{link && (
				<a href={link} target='_blank' rel='noopener noreferrer'>
					Learn More
				</a>
			)}
			<div>
				<p>{description}</p>
			</div>
		</div>
	)
}
