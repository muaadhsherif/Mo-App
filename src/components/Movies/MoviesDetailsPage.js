import { connect } from 'react-redux'
import { useLocation } from 'react-router'
import DetailsLink from './DetailsLink'

function MoviesDetails(props) {
	const location = useLocation()

	const UI = () => {
		if (props.details) {
			const details = props.details
			let arr = []

			for (const key in details) {
				if (key !== 'Overview') {
					arr.push(
						<div key={key}>
							<h3>{key} :</h3>
							<span>{details[key]}</span>
						</div>
					)
				}
			}

			arr.push(
				<div className='overview' key='overview'>
					<h3>Overview:</h3>
					<p>{props.details['Overview']}</p>
				</div>
			)
			return arr
		}
		else {
			let id = location.pathname.slice(8)

			return <DetailsLink clicked={true} id={id} />
		}
	}

	return <div className='details'>{UI()}</div>
}

const mapStateToProps = (state) => {
	return {
		details: state.moviesDetails[state.lastMovieId]
	}
}

export default connect(mapStateToProps)(MoviesDetails)
