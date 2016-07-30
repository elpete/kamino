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

            <div>
                <div className="panel panel-info panel-specialization">
                  <div className="panel-heading">
                    <h3 className="panel-title">{specRef[specialization].display_name}</h3>
                  </div>
                  <div className="panel-body">
                  	<h5>Description</h5>
                    <p>{specRef[specialization].description}</p>
                    <h5>Specialization Skills</h5>
                    <ul>
                    	{ specializationSkills }
                    </ul>
                  </div>
                </div>
            </div>
        )
    }
}