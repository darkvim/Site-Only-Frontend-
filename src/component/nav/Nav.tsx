import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navElements } from '../../links/nav_menu'
import styles from './Nav.module.css'

export function Nav() {
	const location = useLocation()
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<nav className={styles.home_nav}>
			{navElements.map((value, key) => {
				return (
					<NavLink
						onMouseEnter={() => setHoveredIndex(key)}
						onMouseLeave={() => setHoveredIndex(null)}
						to={`/${value.value}`}
						className={({ isActive }) => (isActive ? styles.active : '')}
						end
						onClick={e => {
							if (location.pathname === `/${value.value}`) e.preventDefault()
						}}
						key={key}
					>
						<img src={value.img} alt='image' />
						{hoveredIndex === key && <span> {value.alt}</span>}
					</NavLink>
				)
			})}
		</nav>
	)
}
