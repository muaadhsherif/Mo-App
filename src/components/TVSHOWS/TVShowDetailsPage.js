import { connect } from 'react-redux'
import DetailsLink from './DetailsLink'
import { useLocation } from 'react-router-dom'

function TVShowDetails(props) {
	const loc = useLocation()
	const id = loc.pathname.slice(10)

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
			return <DetailsLink clicked={true} id={id} />
		}
	}

	return <div className='details'>{UI()}</div>
}

const mapStateToProps = (state) => {
	return {
		details: state.showsDetails[state.detailedShowsIds.length - 1]
	}
}

export default connect(mapStateToProps)(TVShowDetails)
