import React, {Component, PropTypes} from 'react'

export default class SkillRankInput extends Component {
	constructor( props ) {
		super(props)
	}

	render() {

		const { 
			skillKey, 
			skillName, 
			skillCharacteristic,
			currentRank,
			nextCost,
			canPurchaseNextRank
		} = this.props

		const labelClass = "label " + skillCharacteristic.toLowerCase();


		return (
			<div>
				<form className = "form-horizontal col-sm-6 col-md-4 col-lg-3 ">
				<div className = "form-group">
					<div className = "btn-group col-sm-8" role = "group">
						<h3><span className = { labelClass }>{skillName}</span></h3>
						<button type = "button" className = "btn btn-default">1</button>
						<button type = "button" className = "btn btn-default">2</button>
						<button type = "button" className = "btn btn-default">3</button>
						<button type = "button" className = "btn btn-default">4</button>
						<button type = "button" className = "btn btn-default">5</button>
					</div>
				</div>
				</form>
			</div>

		)
	}
}