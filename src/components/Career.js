import React, {Component, PropTypes} from 'react'

//COMPONENTS
import SpecializationSelection from './SpecializationSelection'
import CareerSkillLabel from './CareerSkillLabel'

//REFERENCES
import careersRef from '../../reference/careers.json'
import skillsRef from '../../reference/skills.json'

export default class Career extends Component {
    render() {
    	const {career} = this.props

    	const careerSkills = careersRef[career].career_skills.map(key => (

			<CareerSkillLabel
                key = {key}
                skillKey = {key}
                skillName = {skillsRef[key].display_name}
                skillCharacteristic = {skillsRef[key].characteristic}
            />
    	))

        const forceRating = careersRef[career].force_rating

        return (
            <div className = "well text-center">
                <div className = "row">
                    <div className = "col-sm-6">
                        <h4>Description</h4>
                        <p>{ careersRef[career].description }</p>
                    </div>
                    <div className = "col-sm-6">
                        <div className ="row ">
                            <h4>Career Skills</h4>
                            { careerSkills }
                        </div>
                        <div className = "row">
                            <h4 >Force Rating</h4>
                            <h4> <span className = "label label-default">{ forceRating }</span></h4>
                        </div>
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


