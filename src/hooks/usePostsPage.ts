import axios from 'axios'
import { useEffect, useState } from 'react'
import { IPost } from '../components/types'

export const usePostsPage = () => {
	const [posts, setPosts] = useState<IPost[]>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [postsLimitPage] = useState<number>(10)
	const [show, setShow] = useState<boolean>(true)

	const lastPostsIndex = currentPage * postsLimitPage
	const firstPostsIndex = lastPostsIndex - postsLimitPage
	const currentPostsPage = posts.slice(firstPostsIndex, lastPostsIndex)

	const nextPage = () => {
		setCurrentPage(prev => prev + 1)
	}

	const prevPage = () => {
		setCurrentPage(prev => prev - 1)
	}
	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber)
	}

	useEffect(() => {
		const getPosts = async () => {
			setLoading(true)
			await axios
				.get('https://jsonplaceholder.typicode.com/posts')
				.then(response => {
					const posts = response.data
					setPosts(posts)
					console.log(posts)
					setLoading(false)
				})
		}
		getPosts()
	}, [])

	return {
		loading,
		show,
		posts,
		setShow,
		currentPostsPage,
		lastPostsIndex,
		firstPostsIndex,
		postsLimitPage,
		nextPage,
		prevPage,
		paginate,
	}
}
