import React, {Component} from 'react'

import {Link} from 'react-router'

import careers from '../../reference/careers.json'
import specializations from '../../reference/specializations.json'
import skills from '../../reference/skills.json'

export default class CareerView extends Component {

	constructor(props) {
	    super(props)
	    this.state = {
	        
	    }
	}

    render() {

    	const careerId = this.props.id

    	const careerName = careers[careerId].display_name

    	const careerSkills = careers[careerId].career_skills

    	const careerSkillsList = careerSkills.map(key => (
            <li key={key}>{skills[key].display_name}    <sup><em>[{skills[key].characteristic}]</em></sup></li>
        ));

        return (

            <div className='well'>
                <label> {careerName}s start with the following Career Skills: </label>
                <ul>
                	{careerSkillsList}
                </ul>
                <p><b>And a Force Rating of: </b>{careers[careerId].force_rating}</p>
            </div>

        )
    }
}