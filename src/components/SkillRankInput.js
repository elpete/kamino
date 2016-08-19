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

		console.log( nextCost, "canPurchaseNextRank", canPurchaseNextRank );
		
		return (
			<div>
				<form className = "form-horizontal col-sm-6">
				<div className = "form-group">
					<label className = "control-label col-sm-4">{skillName} [{skillCharacteristic}]</label>
					<div className="btn-group col-sm-8" role="group">
						<button type="button" className="btn btn-default">1</button>
						<button type="button" className="btn btn-default">2</button>
						<button type="button" className="btn btn-default">3</button>
						<button type="button" className="btn btn-default">4</button>
						<button type="button" className="btn btn-default">5</button>
					</div>
				</div>
				</form>
			</div>

		)
	}
}