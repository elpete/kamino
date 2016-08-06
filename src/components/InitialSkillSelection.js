import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

//REDUCERS
import {getCharacter} from '../reducers/index'	

//ACTIONS

//COMPONENTS

//REFERENCES
import careerRef from '../../reference/careers.json'
import specializationRef from '../../reference/specializations.json'
import skillsRef from '../../reference/skills.json'

export default class InitialSkillSelection extends Component {
	componentDidMount() {
   
    }

    constructor( props ) {
    	super( props );
    	this.handleCareerSkillChange = this.handleCareerSkillChange.bind(this);
    }

    handleCareerSkillChange () {

    }

    handleSpecializationSkillChange () {

    }

    toCareer(e) {
        e.preventDefault();
        hashHistory.push('/career');
    }

	render() {
		const {career} = this.props.character

		const {specialization} = this.props.character

		const careerSkills = careerRef[career].career_skills.map( skillKey => 
			<CareerSkillButton
				key = { skillKey }
				skillKey = { skillKey }
				skillName = { skillsRef[skillKey].display_name}
				handleClick = { this.handleCareerSkillChange } 
			/>
		)

		const specializationSkills =  specializationRef[specialization].career_skills.map(skillKey => (
			<SpecializationSkillButton
				key = { skillKey }
				skillKey = { skillKey }
				skillName = { skillsRef[skillKey].display_name}
				handleClick = { this.handleSpecializationSkillChange } 
			/>
		));

		return (
			<div className="well">

				<div className='well'>
					<div className="row">
						<h5> Select Initial Skills </h5>
						<div  className='col-sm-6'>
							<h5> Career: {careerRef[career].display_name} </h5>
							<h5> Select 4 </h5>
							<div className="btn-group-vertical" role="group">
								{careerSkills}
							</div>
						</div>
						<div  className='col-sm-6'>
							<h5> Specialization: {specializationRef[specialization].display_name}</h5>
							<h5> Select 2 </h5>
							<div className="btn-group-vertical" role="group">
								{specializationSkills}
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
		this.props.handleClick( this.props.skillKey )

		const buttonClasses = document.getElementById('CAREER_' + this.props.skillKey ).classList

		// var selectedCount = 0

		// if (selectedCount < 2) {
			if (buttonClasses.contains("btn-success")) {
			    buttonClasses.remove("btn-success");
			    //selectedCount -= 1;   
			} else {
			    buttonClasses.add("btn-success");
			    // selectedCount += 1; ??????
			}
			if (buttonClasses.contains("btn-info")) {
			    buttonClasses.remove("btn-info");
			} else {
			    buttonClasses.add("btn-info");
			}	
		// }
	}

	render() {
		const {skillKey, skillName} = this.props
		const skillButtonId = 'CAREER_' + skillKey
		return (
			<button
				type = "button"
				className = "btn btn-info"
				name = { skillKey }
				id = { skillButtonId }
				onClick = { this.handleButtonClick }
				value = { skillKey }
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
		this.props.handleClick( this.props.skillKey )

		const buttonClasses = document.getElementById('SPEC_' + this.props.skillKey ).classList

		// var selectedCount = 0

		// if (selectedCount < 4) {
			if (buttonClasses.contains("btn-success")) {
			    buttonClasses.remove("btn-success");
			    //selectedCount -= 1;   
			} else {
			    buttonClasses.add("btn-success");
			    // selectedCount += 1; ??????
			}
			if (buttonClasses.contains("btn-info")) {
			    buttonClasses.remove("btn-info");
			} else {
			    buttonClasses.add("btn-info");
			}	
		// }
	}

	render() {
		const {skillKey, skillName} = this.props
		const skillButtonId = 'SPEC_' + skillKey
		return (
			<button
				type = "button"
				className = "btn btn-info"
				name = { skillKey }
				id = { skillButtonId }
				onClick = { this.handleButtonClick }
				value = { skillKey }
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

export default connect( mapStateToProps )( InitialSkillSelection )