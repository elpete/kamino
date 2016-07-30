import React, {Component, PropTypes} from 'react'

//COMPONENTS
import SpecializationSelection from './SpecializationSelection'

//REFERENCES
import careersRef from '../../reference/careers.json'
import skillsRef from '../../reference/skills.json'

export default class Career extends Component {
    render() {
    	const {career} = this.props
    	const careerSkills = careersRef[career].career_skills.map(key => (
			<li value = {key} key = {key}>
				{ skillsRef[key].display_name } <sup>[{ skillsRef[key].characteristic }]</sup>
			</li>
    	));
        return (
            <div className = 'well'>
            	<h5>Description</h5>
            	<p>{ careersRef[career].description }</p>
            	<h5>Career Skills</h5>
        		<ul>
        			{ careerSkills }
        		</ul>
                <h5>Specializations</h5>
                <SpecializationSelection career = { career }/>
            </div>
        )
    }
}