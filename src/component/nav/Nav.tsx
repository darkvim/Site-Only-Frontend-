import { useNavigate } from 'react-router-dom'
import { navElements, websiteLogo } from '../../links/nav_menu'
import styles from './Nav.module.css'
import { useState } from 'react'

export function Nav() {
	const navigate = useNavigate()
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<nav className={styles.home_nav}>
			<ul>
				<li onClick={() => navigate('/')}>{websiteLogo.value}</li>
				{navElements.map((value, key) => {
					return (
						<li
							onMouseEnter={() => setHoveredIndex(key)}
							onMouseLeave={() => setHoveredIndex(null)}
							key={key}
						>
							<img src={value.img} alt='image' />
							{hoveredIndex === key && <span>{value.value}</span>}
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
