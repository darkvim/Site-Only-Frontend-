export const handleCopyToClipboard = (text: string) => {
	navigator.clipboard
		.writeText(text)
		.then(() => 'Copied')
		.catch(error => console.error(error))
}

export const handleCopyToClipboardWithPopUpMessage = (
	text: string,
	div: HTMLElement,
	styles: any
) => {
	handleCopyToClipboard(text)

	const message = document.createElement('span')
	message.textContent = 'Copied!'
	message.className = styles.copyMessage

	div.appendChild(message)

	setTimeout(() => {
		div.removeChild(message)
	}, 800)
}
