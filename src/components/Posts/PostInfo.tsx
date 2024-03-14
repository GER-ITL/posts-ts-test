import { Link } from 'react-router-dom'
import { IInfo } from '../types'

const PostInfo = ({ id, title, body, setShow }: IInfo) => {
	return (
		<div>
			<h2>{title}</h2>
			{id}
			{'. '}
			{body} <br />
			<Link
				onClick={() => {
					setShow(true)
				}}
				to='/'
			>
				Back
			</Link>
		</div>
	)
}

export default PostInfo
