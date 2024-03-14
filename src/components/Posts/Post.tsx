import { Route, Routes } from 'react-router-dom'
import { PropsItem } from '../types'
import PostInfo from './PostInfo'

const Post = ({ currentPostsPage, setShow }: PropsItem) => {
	return (
		<div>
			<Routes>
				{currentPostsPage.map(post => {
					return (
						<Route
							path={`/${post.id}`}
							element={
								<PostInfo
									id={post.id}
									title={post.title}
									body={post.body}
									setShow={setShow}
								/>
							}
						/>
					)
				})}
			</Routes>
		</div>
	)
}

export default Post
