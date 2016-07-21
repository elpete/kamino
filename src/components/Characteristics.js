import React, {Component, PropTypes} from 'react'

import {
	BrawnCharacteristic,
	AgilityCharacteristic,
	IntellectCharacteristic,
	CunningCharacteristic,
	WillpowerCharacteristic,
	PresenceCharacteristic,
} from './Characteristic'

export default class Characteristics extends Component {
	static propTypes = {
		brawn: PropTypes.number.isRequired,
		agility: PropTypes.number.isRequired,
		intellect: PropTypes.number.isRequired,
		cunning: PropTypes.number.isRequired,
		willpower: PropTypes.number.isRequired,
		presence: PropTypes.number.isRequired,
	}

	render() {
		const {brawn, agility, intellect, cunning, willpower, presence} = this.props
		return (
			<div>
				<BrawnCharacteristic value={brawn} />
				<AgilityCharacteristic value={agility} />
				<IntellectCharacteristic value={intellect} />
				<CunningCharacteristic value={cunning} />
				<WillpowerCharacteristic value={willpower} />
				<PresenceCharacteristic value={presence} />
			</div>
		)
	}
}