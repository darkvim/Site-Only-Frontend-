import { HomeBlock } from './sub-component/HomeBlock'
import styles from './HomeMain.module.css'

import image_1 from '/images/image_2.jpg'
import image_2 from '/images/image_3.jpeg'
import image_3 from '/images/image_4.jpeg'
import image_4 from '/images/image_5.jpeg'
import image_5 from '/images/image_6.jpeg'
import image_6 from '/images/image_7.jpeg'

export function HomeMain() {
	return (
		<div className={styles.home_main_container}>
			<header>
				<HomeBlock
					title='title'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores fugiat quisquam corporis tempora accusantium saepe minima eveniet eligendi error, temporibus iure sequi voluptas atque quasi reiciendis illo doloribus dignissimos?'
					image={image_1}
				/>
				<HomeBlock
					title='title'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores fugiat quisquam corporis tempora accusantium saepe minima eveniet eligendi error, temporibus iure sequi voluptas atque quasi reiciendis illo doloribus dignissimos?'
					image={image_2}
				/>
				<HomeBlock
					title='title'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores fugiat quisquam corporis tempora accusantium saepe minima eveniet eligendi error, temporibus iure sequi voluptas atque quasi reiciendis illo doloribus dignissimos?'
					image={image_3}
				/>
				<HomeBlock
					title='title'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores fugiat quisquam corporis tempora accusantium saepe minima eveniet eligendi error, temporibus iure sequi voluptas atque quasi reiciendis illo doloribus dignissimos?'
					image={image_4}
				/>
				<HomeBlock
					title='title'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores fugiat quisquam corporis tempora accusantium saepe minima eveniet eligendi error, temporibus iure sequi voluptas atque quasi reiciendis illo doloribus dignissimos?'
					image={image_5}
				/>
				<HomeBlock
					title='title'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores fugiat quisquam corporis tempora accusantium saepe minima eveniet eligendi error, temporibus iure sequi voluptas atque quasi reiciendis illo doloribus dignissimos?'
					image={image_6}
				/>
			</header>
		</div>
	)
}
