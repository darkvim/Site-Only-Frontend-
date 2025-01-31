import { Header } from '../../component/header/Header'
import { Nav } from '../../component/nav/Nav'
import styles from './Home.module.css'
import { HomeMain } from './main/HomeMain'

export function Home() {
	return (
		<div style={styles}>
			<Header />
			<Nav />
			<HomeMain />
		</div>
	)
}
