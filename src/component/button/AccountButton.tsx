import { IAccountButton } from '../../types/account/button/IAccountButton'

export const AccountButton: React.FC<IAccountButton> = ({
	onClickFunc,
	type,
	className,
	text,
}) => {
	return (
		<button type={type} onClick={onClickFunc} className={className}>
			{text}
		</button>
	)
}
