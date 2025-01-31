import { IPostComment } from '../../types/comment/IPostComment'

export const PostComment: React.FC<IPostComment> = ({
	userIcon,
	username,
	message,
}) => {
	return (
		<div>
			<h4>{username}</h4>
			<img src={userIcon} alt='userIcon' />
			<p>{message}</p>
		</div>
	)
}
