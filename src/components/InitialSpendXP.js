import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

//REDUCERS
import {getCharacter} from '../reducers/index'

//ACTIONS

//COMPONENTS

//REFERENCES


export default class SpendXP extends Component {
    componentDidMount(){
        
    }

    toInitialSkills( e ) {
        e.preventDefault();
        hashHistory.push( '/initialSkills' );
    }

    render() {

        return (
            <div className = "well">
            	<div className = "row">
            	</div>
                <button 
                    onClick = { this.toInitialSkills.bind(this) } 
                    className = "btn btn-primary"> 
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