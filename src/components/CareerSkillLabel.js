import React, {Component, PropTypes} from 'react'


//REFERENCES
import careersRef from '../../reference/careers.json'
import skillsRef from '../../reference/skills.json'


export default class CareerSkillLabel extends Component {
    constructor( props ) {
        super(props)
    }

    render() {
        const {
            skillKey,
            skillName,
            skillCharacteristic
        } = this.props

        const badge = "Skills__skill badge " + skillCharacteristic.toLowerCase()

        return (
            <span className = {badge}>{ skillName } </span>
        )
    }
}