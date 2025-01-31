import { api, contactElements, sign } from '../../links/footer_menu'

import styles from './Footer.module.css'

export function Footer() {
	return (
		<footer style={styles}>
			<div className={styles.footer_container}>
				<div>
					<ul>
						{contactElements.map((value, key) => (
							<li key={key}>{value}</li>
						))}
					</ul>
				</div>
				<div>
					<ul>
						{sign.map((value, key) => (
							<li key={key}>{value}</li>
						))}
					</ul>
				</div>
				<div>
					<ul>
						{api.map((value, key) => (
							<li key={key}>{value}</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}
