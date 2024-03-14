export interface IInfo {
	id: number
	title: string
	body: string
	setShow?: React.Dispatch<React.SetStateAction<boolean>> | any
}
export interface IPost {
	userId: number
	id: number
	title: string
	body: string
}
export interface IPaginate {
	postsLimitPage: number
	totalPosts: number
	paginate(num: number): React.SetStateAction<void>
}

export type PropsItem = {
	currentPostsPage: Array<IInfo>
	setShow: React.Dispatch<React.SetStateAction<boolean>>
}
