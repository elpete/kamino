import React, {Component} from 'react'

import {Link} from 'react-router'

import careers from '../../reference/careers.json'
import specializations from '../../reference/specializations.json'
import skills from '../../reference/skills.json'

export default class SpecializationView extends Component {

	constructor(props) {
	    super(props)
	    this.state = {
	        
	    }
	}

    render() {

    	const specializationId = this.props.specializationId

        const specializationName = specializations[specializationId].display_name


         const specializationSkills = specializations[specializationId].career_skills.map(key => (
            <li key={key}>{skills[key].display_name} <sup><em>[{skills[key].characteristic}]</em></sup></li>
        ));



        return (
        	<div>
	            <div className='well'>
	                <label> {specializationName}s start with the following Career Skills: </label>
                    <ul>
                        {specializationSkills}
                    </ul>

                </div>
            </div>

        )
    }
}