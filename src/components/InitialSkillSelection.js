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
    	console.log(this.props.character)    
    }

    toCareer(e) {
        e.preventDefault();
        hashHistory.push('/career');
    }

	render() {
		const {career} = this.props.character
		const {specialization} = this.props.character

		const careerSkills = careerRef[career].career_skills.map(key => (
			<button className="btn btn-info" value = {key} key = {key}>
				{ skillsRef[key].display_name } <sup>[{ skillsRef[key].characteristic }]</sup>
			</button>
		));

		const specializationSkills =  specializationRef[specialization].career_skills.map(key => (
			<button className="btn btn-info" value = {key} key = {key}>
				{ skillsRef[key].display_name } <sup>[{ skillsRef[key].characteristic }]</sup>
			</button>
		));

		console.log(career);
		console.log(specialization);


		return (
			<div className="well">

				<div className="row">
					<h5> Select Initial Skills </h5>
					<div  className='col-md-6'>
						<h3> Career </h3>
						<h5> {careerRef[career].display_name} </h5>
						<h5> Select 4 </h5>
						<div className="btn-group-vertical" role="group">
							{careerSkills}
						</div>
					</div>
					<div  className='col-md-6'>
						<h3> Specialization </h3>
						<h5> {specializationRef[specialization].display_name} </h5>
						<h5> Select 2 </h5>
						<div className="btn-group-vertical" role="group">
							{specializationSkills}
						</div>
					</div>
				</div>

				<div className="row">
					<button 
					    onClick={ this.toCareer.bind( this ) } 
					    className='btn btn-primary'> 
					    <span className="glyphicon glyphicon-menu-left"></span> Back to Career Selection
					</button>
				</div>

			</div>
		)
	}
}

function mapStateToProps( state ) {
	return {
		character: getCharacter( state )
	};
}

export default connect( mapStateToProps )( InitialSkillSelection )