import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

//REDUCERS
import {getCharacter} from '../reducers/index'	

//ACTIONS
import {
	changeInitialCareerSkills,
	changeInitialSpecializationSkills,
	changeLightsaberSkill
} from '../actions/skillActions'

//COMPONENTS

//REFERENCES
import careerRef from '../../reference/careers.json'
import specializationRef from '../../reference/specializations.json'
import skillsRef from '../../reference/skills.json'

export default class InitialSkillSelection extends Component {
    constructor( props ) {
    	super( props );

    	this.handleCareerSkillChange = this.handleCareerSkillChange.bind(this);
    	this.handleSpecializationSkillChange = this.handleSpecializationSkillChange.bind(this);
    }

    handleCareerSkillChange ( skillKey, initialCareerSkills ) {

		if (initialCareerSkills.includes(skillKey)) {

			initialCareerSkills.splice(initialCareerSkills.indexOf(skillKey),1)

		} else {

			if ( initialCareerSkills.length < 4 ) {
				initialCareerSkills.push(skillKey)
			}

		}

		initialCareerSkills.sort()

		this.props.changeInitialCareerSkills(initialCareerSkills)

    }

    handleSpecializationSkillChange ( skillKey, initialSpecializationSkills ) {

		if (initialSpecializationSkills.includes(skillKey)) {

			initialSpecializationSkills.splice(initialSpecializationSkills.indexOf(skillKey),1)

		} else {

			if ( initialSpecializationSkills.length < 2 ) {
				initialSpecializationSkills.push(skillKey)
			}

		}

		initialSpecializationSkills.sort()

		this.props.changeInitialSpecializationSkills(initialSpecializationSkills)

    }

    toCareer(e) {
        e.preventDefault();
        hashHistory.push('/career');
    }

	render() {
		const {
			career, 
			specialization
		} = this.props.character

		const {
			initialCareerSkills,
			initialSpecializationSkills
		} = this.props.character.skills

		console
		const careerSkillButtons = careerRef[career].career_skills.map( skillKey => 
			<CareerSkillButton
				key = { skillKey }
				skillKey = { skillKey }
				skillName = { skillsRef[skillKey].display_name}
				initialCareerSkills = { initialCareerSkills }
				handleClick = { this.handleCareerSkillChange } 
			/>
		)

		const specializationSkillButtons = specializationRef[specialization].career_skills.map( skillKey => 
			<SpecializationSkillButton
				key = { skillKey }
				skillKey = { skillKey }
				skillName = { skillsRef[skillKey].display_name}
				initialSpecializationSkills = { initialSpecializationSkills }
				handleClick = { this.handleSpecializationSkillChange } 
			/>
		)

		return (
			<div className="well">

				<div className='well'>
					<div className="row">
						<h5> Select Initial Skills </h5>
						<div  className='col-sm-6'>
							<h5> Career: {careerRef[career].display_name} </h5>
							<h5> {initialCareerSkills.length} out of 4 </h5>
							<div className="btn-group-vertical" role="group">
								{careerSkillButtons}
							</div>
						</div>
						<div  className='col-sm-6'>
							<h5> Specialization: {specializationRef[specialization].display_name} </h5>
							<h5> {initialSpecializationSkills.length} out of 2 </h5>
							<div className="btn-group-vertical" role="group">
								{specializationSkillButtons}
							</div>
						</div>
					</div>
				</div>

				<button 
				    onClick={ this.toCareer.bind( this ) } 
				    className='btn btn-primary'> 
				    <span className="glyphicon glyphicon-menu-left"></span> Back to Career Selection
				</button>

			</div>
		)
	}
}

class CareerSkillButton extends Component {
	constructor( props ) {
		super(props)
		this.handleButtonClick = this.handleButtonClick.bind(this)
	}

	handleButtonClick() {
		this.props.handleClick( this.props.skillKey, this.props.initialCareerSkills )	
	}

	render() {
		const {
			skillKey, 
			skillName, 
			initialCareerSkills
		} = this.props

		return (
			<button
				type = "button"
				className = {initialCareerSkills.includes(skillKey) ? "btn btn-success" : "btn btn-info"}
				name = { skillKey }
				value = { skillKey }
				onClick = { this.handleButtonClick }
				>
				{ skillName }
			</button>
		)
	}
}

class SpecializationSkillButton extends Component {
	constructor( props ) {
		super(props)
		this.handleButtonClick = this.handleButtonClick.bind(this)
	}

	handleButtonClick() {
		this.props.handleClick( this.props.skillKey, this.props.initialSpecializationSkills )	
	}

	render() {
		const {
			skillKey, 
			skillName, 
			initialSpecializationSkills
		} = this.props

		return (
			<button
				type = "button"
				className = {initialSpecializationSkills.includes(skillKey) ? "btn btn-success" : "btn btn-info"}
				name = { skillKey }
				value = { skillKey }
				onClick = { this.handleButtonClick }
				>
				{ skillName }
			</button>
		)
	}
}


function mapStateToProps( state ) {
	return {
		character: getCharacter( state )
	};
}

export default connect( mapStateToProps, {
	changeInitialCareerSkills, 
	changeInitialSpecializationSkills 
	} )( InitialSkillSelection )
