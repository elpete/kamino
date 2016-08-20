import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

//REDUCERS
import {getCharacter} from '../reducers/index'

//ACTIONS

//COMPONENTS
import SkillRankInput from './SkillRankInput'

//REFERENCES
import skillsRef from '../../reference/skills.json'
import careersRef from '../../reference/careers.json'
import specializationsRef from '../../reference/specializations.json'

function isCareerSkill( character, skillKey ) {
    const careerSkills = careersRef[ character.career ].career_skills

    if ( careerSkills.indexOf( skillKey ) > -1 ) {
        return true
    }


    const specializationSkills = specializationsRef[ character.specialization ].career_skills

    return specializationSkills.indexOf( skillKey ) > -1
} 


export default class SpendXP extends Component {
    componentDidMount(){
        
    }

    toInitialSkills( e ) {
        e.preventDefault();
        hashHistory.push( '/initialSkills' );
    }

    render() {

        const availableExperience = this.props.character.xp.available;
        const skillRankInputs = Object.keys(skillsRef).map( skillKey => {

            const currentRank = this.props.character.skills[skillKey] || 0
            const nextCost = ( currentRank + 1 ) * 5 + ( isCareerSkill( this.props.character, skillKey ) ? 0 : 5 );
            const canPurchaseNextRank = currentRank < 5 && nextCost <= availableExperience;

 			return (
                <SkillRankInput
                    key = { skillKey }
                    skillKey = { skillKey }
                    skillName = { skillsRef[skillKey].display_name }
                    skillCharacteristic = { skillsRef[skillKey].characteristic }
                    currentRank = { currentRank }
                    nextCost = { nextCost }
                    canPurchaseNextRank = { canPurchaseNextRank }
                />
            )
            

 		} )

        return (
            <div  className = "well">
                <div className="alert alert-success">Available XP: {this.props.character.xp.available}</div>
                <div className = "row">
                    {skillRankInputs}
                </div>
                <button 
                    onClick = { this.toInitialSkills.bind(this) } 
                    className = "btn btn-primary btn-nav"> 
                    <span className = "glyphicon glyphicon-menu-left"></span>Back to Initial Skill Selection
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        character: getCharacter(state)
    };
}

export default connect( mapStateToProps, {} )( SpendXP )