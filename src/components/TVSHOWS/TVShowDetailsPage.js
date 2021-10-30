import { connect } from 'react-redux'
import { Redirect } from 'react-router'

function TVShowDetails(props) {
	const UI = () => {
		if (props.details) {
			const details = props.details
			let arr = []

			for (const key in details) {
				if (key !== 'Overview') {
					arr.push(
						<div>
							<h3>{key} :</h3>
							<span>{details[key]}</span>
						</div>
					)
				}
			}
			arr.push(
				<div className='overview'>
					<h3>Overview:</h3>
					<p>{props.details['Overview']}</p>
				</div>
			)
			return arr
		}
		else {
			return <Redirect to='/' />
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
