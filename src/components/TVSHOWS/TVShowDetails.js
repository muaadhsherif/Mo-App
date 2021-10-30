import { connect } from 'react-redux'

function TVShowDetails(props) {
	const details = props.details

	const UI = () => {
		let arr = []

		for (const key in details) {
			if (key !== 'Overview')
				arr.push(
					<div>
						<h3>{key} :</h3>
						<span>{details[key]}</span>
					</div>
				)
		}
		arr.push(
			<div className='overview'>
				<h3>Overview:</h3>
				<p>{details.Overview}</p>
			</div>
		)
		return arr
	}

	return <div className='details'>{UI()}</div>
}

const mapStateToProps = (state) => {
	return {
		details: state.showsDetails[state.detailedShowsIds.length - 1]
	}
}

export default connect(mapStateToProps)(TVShowDetails)
