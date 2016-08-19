import React, {Component, PropTypes} from 'react'

//COMPONENTS
import CareerSkillLabel from './CareerSkillLabel'


//REFERENCES
import specRef from '../../reference/specializations.json'
import skillsRef from '../../reference/skills.json'

export default class Specialization extends Component {
    render() {
    	const {specialization} = this.props
        const specializationSkills = specRef[specialization].career_skills.map(key => (

            <CareerSkillLabel
                key = {key}
                skillKey = {key}
                skillName = {skillsRef[key].display_name}
                skillCharacteristic = {skillsRef[key].characteristic}
            />
        ))
        return (
            <div className = "row">
                <div className = "col-sm-6">
                    <h4>Description</h4>
                    <p>{specRef[specialization].description}</p>
                </div>
                <div className = "col-sm-6">
                    <h4>Specialization Skills</h4>
                    { specializationSkills }
                </div>
            </div>
        )
    }
}