import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { navElements } from '../../links/nav_menu'
import styles from './Nav.module.css'

export function Nav() {
	const navigate = useNavigate()
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<nav className={styles.home_nav}>
			<ul>
				{navElements.map((value, key) => {
					return (
						<li
							onMouseEnter={() => setHoveredIndex(key)}
							onMouseLeave={() => setHoveredIndex(null)}
							onClick={() => navigate(value.value)}
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
