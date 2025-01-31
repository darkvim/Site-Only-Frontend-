export interface IUserData {
	id: number
	username: string
	email: string
	urlToUserIcon: string
}

export interface IUserInfo {
	username: string
	email: string
}

export interface ISetUserData {
	setUserData: (userData: IUserData) => void
	setLoading: (loading: boolean) => void
}

export interface IUpdateUserData {
	username: string | null
	email: string | null
	newPassword: string | null
	oldPassword: string | null
}
