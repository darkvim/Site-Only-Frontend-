import { Block } from './sub-component/Block'

import styles from './Main.module.css'

export function Main() {
	return (
		<main className={styles.library_container} style={styles}>
			<Block />
			<Block />
			<Block />
			<Block />
			<Block />
			<Block />
			<Block />
			<Block />
			<Block />
			<Block />
		</main>
	)
}
