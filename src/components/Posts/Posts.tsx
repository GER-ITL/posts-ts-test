import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../types'
import Pagination from '../ui/Pagination'
import Post from './Post'
import c from './Posts.module.scss'
const Posts = () => {
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

	return (
		<div className={c.wrapper}>
			<Post currentPostsPage={currentPostsPage} setShow={setShow} />
			{show && (
				<div className={c.posts}>
					<h1>POSTS</h1>

					{loading && <h2>Loading...</h2>}
					<ul>
						{currentPostsPage.map(post => {
							return (
								<li key={post.id}>
									{post.id}
									{'. '}{' '}
									<Link
										onClick={() => {
											setShow(!show)
										}}
										to={`/${post.id}`}
									>
										{post.title}
									</Link>
								</li>
							)
						})}
					</ul>

					<Pagination
						postsLimitPage={postsLimitPage}
						totalPosts={posts.length}
						paginate={paginate}
					/>
					<div>
						{firstPostsIndex > 1 && (
							<button onClick={prevPage}>Prev Page</button>
						)}
						<button onClick={nextPage}>Next Page</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Posts
