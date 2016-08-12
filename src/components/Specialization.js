import React, {Component, PropTypes} from 'react'

//REFERENCES
import specRef from '../../reference/specializations.json'
import skillsRef from '../../reference/skills.json'

export default class Specialization extends Component {
    render() {
    	const {specialization} = this.props
    	const specializationSkills = specRef[specialization].career_skills.map(key => (
			<li value = {key} key = {key}>
				{ skillsRef[key].display_name } <sup>[{ skillsRef[key].characteristic }]</sup>
			</li>
    	));
        return (
            <div className = "row">
                <div className = "col-sm-6 text-center">
                    <h4>Description</h4>
                    <p>{specRef[specialization].description}</p>
                </div>
                <div className = "col-sm-6">
                    <h4 className = "text-center" >Specialization Skills</h4>
                    <ul>
                    { specializationSkills }
                    </ul>
                </div>
            </div>
        )
    }
}