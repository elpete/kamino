import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

//REDUCERS
import {getCharacter} from '../reducers/index'	

//ACTIONS
import {
	changeInitialCareerSkills,
	changeInitialSpecializationSkills
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

    handleCareerSkillChange ( skillKey, initialCareerSkills, allowance ) {

		if (initialCareerSkills.includes(skillKey)) {

			initialCareerSkills.splice(initialCareerSkills.indexOf(skillKey),1)

		} else {

			if ( initialCareerSkills.length < allowance ) {
				initialCareerSkills.push(skillKey)
			}

		}

		initialCareerSkills.sort()

		this.props.changeInitialCareerSkills(initialCareerSkills)

    }

    handleSpecializationSkillChange ( skillKey, initialSpecializationSkills, allowance ) {

		if (initialSpecializationSkills.includes(skillKey)) {

			initialSpecializationSkills.splice(initialSpecializationSkills.indexOf(skillKey),1)

		} else {

			if ( initialSpecializationSkills.length < allowance ) {
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

    toInitialSpendXP(e) {
        e.preventDefault();
        hashHistory.push('/initialSpendXP');
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

		const careerAllowance = careerRef[career].allowance
		const specializationAllowance = specializationRef[specialization].allowance

		const careerSkillButtons = careerRef[career].career_skills.map( skillKey => 
			<CareerSkillButton
				key = { skillKey }
				skillKey = { skillKey }
				skillName = { skillsRef[skillKey].display_name}
				initialCareerSkills = { initialCareerSkills }
				allowance = { careerAllowance }
				handleClick = { this.handleCareerSkillChange } 
			/>
		)

		const specializationSkillButtons = specializationRef[specialization].career_skills.map( skillKey => 
			<SpecializationSkillButton
				key = { skillKey }
				skillKey = { skillKey }
				skillName = { skillsRef[skillKey].display_name}
				initialSpecializationSkills = { initialSpecializationSkills }
				allowance = { specializationAllowance }
				handleClick = { this.handleSpecializationSkillChange } 
			/>
		)

		return (
			<div className="well">

				<div className='well'>
					<div className="row text-center">
						<h3> Select Initial Skills </h3>
						<div  className='col-sm-6 text-center'>
							<h4> Career: {careerRef[career].display_name} </h4>
							<h5> {initialCareerSkills.length} out of {careerAllowance} </h5>
							<div className="btn-group-vertical" role="group">
								{careerSkillButtons}
							</div>
						</div>
						<div  className='col-sm-6 text-center'>
							<h4> Specialization: {specializationRef[specialization].display_name} </h4>
							<h5> {initialSpecializationSkills.length} out of {specializationAllowance} </h5>
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

				<button 
				    onClick={ this.toInitialSpendXP.bind( this ) } 
				    className='btn btn-primary pull-right'> 
				    Continue to Initial Spend XP <span className="glyphicon glyphicon-menu-right"></span>
				</button>

			</div>
		)
	}
}

//Change buttons to look more like the badges on Career page, maybe inverted coloring for unselected.

class CareerSkillButton extends Component {
	constructor( props ) {
		super(props)
		this.handleButtonClick = this.handleButtonClick.bind(this)
	}

	handleButtonClick() {
		this.props.handleClick( this.props.skillKey, this.props.initialCareerSkills, this.props.allowance )	
	}

	render() {
		const {
			skillKey, 
			skillName, 
			initialCareerSkills,
			allowance
		} = this.props

		return (
			<button
				type = "button"
				className = {initialCareerSkills.includes(skillKey) ? "btn btn-primary" : "btn btn-default"}
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
		this.props.handleClick( this.props.skillKey, this.props.initialSpecializationSkills, this.props.allowance )	
	}

	render() {
		const {
			skillKey, 
			skillName, 
			initialSpecializationSkills,
			allowance
		} = this.props

		return (
			<button
				type = "button"
				className = {initialSpecializationSkills.includes(skillKey) ? "btn btn-primary" : "btn btn-default"}
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
