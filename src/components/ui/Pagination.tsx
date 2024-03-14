import { IPaginate } from '../types'
import c from './Pagination.module.scss'
const Pagination = ({ postsLimitPage, totalPosts, paginate }: IPaginate) => {
	const pageNumber = []
	for (let i = 1; i <= Math.ceil(totalPosts / postsLimitPage); i++) {
		pageNumber.push(i)
	}
	return (
		<div>
			<ul className={c.pagination}>
				{pageNumber.map(num => {
					return (
						<li className='pageItem' key={num}>
							<a
								href='!#'
								className='pageLink'
								onClick={e => {
									e.preventDefault()
									paginate(num)
								}}
							>
								{num}
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Pagination
