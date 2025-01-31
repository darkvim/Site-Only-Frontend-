import { IPostProps } from '../../../../../../types/post/IPostProps'

export const Post = ({
	title,
	description,
	httpUrl,
	isCanBeShown,
}: IPostProps) => {
	return (
		<>
			{isCanBeShown && (
				<div>
					<p>{description}</p>
					<img src={httpUrl} alt={title} />
					<h3>{title}</h3>

					{/* {showComments && (
						<PostComment
							userIcon={tempUserIcon}
							username='Qwerty'
							message='Hello TSX'
						/>
					)} */}
				</div>
			)}
		</>
	)
}
