import React, {Component, PropTypes} from 'react'

//COMPONENTS
import Specializations from './Specializations'

//REFERENCES
import careers from '../../reference/careers.json'
import skills from '../../reference/skills.json'

export default class Career extends Component {
    render() {
    	const {career} = this.props
    	const careerSkills = careers[career].career_skills.map(key => (
			<li value = {key} key = {key}>
				{skills[key].display_name} <sup>[{skills[key].characteristic}]</sup>
			</li>
    	));
        return (
            <div className = 'well'>
            	<h5>Description</h5>
            	<p>{ careers[career].description }</p>
            	<h5> Career Skills</h5>
        		<ul>
        			{careerSkills}
        		</ul>
            	<h5>Specializations</h5>
                <Specializations career={career} />
            </div>
        )
    }
}