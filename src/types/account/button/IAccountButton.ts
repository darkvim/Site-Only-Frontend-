export interface IAccountButton {
	onClickFunc: React.MouseEventHandler<HTMLButtonElement>
	type: 'button' | 'submit' | 'reset'
	className?: string
	text?: string
}
