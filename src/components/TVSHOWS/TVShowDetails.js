import { connect } from 'react-redux'

function TVShowDetails(props) {
	const details = props.details

	const UI = () => {
		let arr = []

		for (const key in details) {
			arr.push(
				<div>
					<h2>{key}</h2>
					<p>{details[key]}</p>
				</div>
			)
		}
		return arr
	}

	return <div>{UI()}</div>
}

const mapStateToProps = (state) => {
	return {
		details: state.showsDetails[state.detailedShowsIds.length - 1]
	}
}

export default connect(mapStateToProps)(TVShowDetails)
