import styles from './AccountMain.module.css'
import { AccountData } from './sub-component/account-data/AccountData'
import { UserPosts } from './sub-component/user-posts/UserPosts'

export function AccountMain() {
	return (
		<main className={styles.accountMainContainer}>
			<AccountData />
			<UserPosts />
		</main>
	)
}
