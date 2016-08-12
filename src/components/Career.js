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
                <div className = "row ">
                    <div className = "col-sm-6 text-center">
                        <h4>Description</h4>
                        <p>{ careersRef[career].description }</p>
                    </div>
                    <div className = "col-sm-6">
                        <h4 className = "text-center" >Career Skills</h4>
                            <ul>
                                { careerSkills }
                            </ul>
                    </div>
                </div>
                <div className = "row">
                    <h4 className = "text-center">Specializations</h4>
                    <SpecializationSelection career = { career }/>
                    
                </div>
            </div>
        )
    }
}