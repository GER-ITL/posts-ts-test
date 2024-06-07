import { Link } from 'react-router-dom'
import { usePostsPage } from '../../hooks/usePostsPage'
import Pagination from '../ui/Pagination'
import Post from './Post'
import c from './Posts.module.scss'
const Posts = () => {
	const {
		loading,
		show,
		setShow,
		currentPostsPage,
		firstPostsIndex,
		postsLimitPage,
		posts,
		nextPage,
		prevPage,
		paginate,
	} = usePostsPage()
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
