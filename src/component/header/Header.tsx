import { NavLink, useLocation } from 'react-router-dom'
import search from '/google_icons/search.svg'

import { headerElements } from '../../links/header_menu'
import styles from './Header.module.css'

import { useEffect, useState } from 'react'
import { axiosCurrentUser } from '../../axios/account/axiosAccountInfo'
import { IUserData } from '../../types/account/IUserData'

export function Header() {
	const location = useLocation()

	const [userData, setUserData] = useState<IUserData | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	const [showSuggestions, setShowSuggestions] = useState<boolean>(false)

	useEffect(() => {
		const timeoutId = setTimeout(async () => {
			const responseStatus = await axiosCurrentUser({ setUserData, setLoading })

			if (responseStatus === 500) console.error('User is not authenticated')
		}, 300)
		return () => clearTimeout(timeoutId)
	}, [])

	if (loading) return <div className={styles.loading}>Loading...</div>

	return (
		<header className={styles.header}>
			<div>
				<div
					onClick={() => setShowSuggestions(!showSuggestions)}
					className={styles.search_box}
				>
					<input type='search' placeholder={headerElements[0]} />
					<img src={search} alt='search icon' />

					{showSuggestions && <h1>SUGGESTIONS</h1>}
				</div>
				<div className={styles.header_right_part}>
					<div>
						<NavLink
							to={`/`}
							className={({ isActive }) => (isActive ? styles.active : '')}
							end
							onClick={e => {
								if (location.pathname === `/${headerElements[1]}`)
									e.preventDefault()
							}}
						>
							{headerElements[1]}
						</NavLink>
					</div>
					<div className={styles.account}>
						<NavLink
							to={`/${headerElements[2]}`}
							className={({ isActive }) => (isActive ? styles.active : '')}
							end
							onClick={e => {
								if (location.pathname === `/${headerElements[2]}`)
									e.preventDefault()
							}}
						>
							<img src={userData?.urlToUserIcon} alt={'Account'} />
						</NavLink>
					</div>
				</div>
			</div>
		</header>
	)
}
