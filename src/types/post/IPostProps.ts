export interface IPostProps {
	id: number
	title: string
	article: string
	description: string
	isCanBeShown: boolean
	httpUrl: string
}

export interface ISetPostProps {
	setPostProps: (postData: IPostProps[]) => void
}

export interface IPostData {
	title: string
	description: string
	postIcon: File | null
}

export interface ISetPostData {
	setPostData: (postData: IPostData[]) => void
}
