import { IPostProps } from './IPostProps'

export interface IFilteredPosts {
	postProps: IPostProps[] | null
	showIcons: boolean
	searchQuery: string
}
