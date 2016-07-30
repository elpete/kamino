import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

//REDUCERS
import {getCharacter} from '../reducers/index'

//ACTIONS
import {changeCharacterSpecializtion} from '../actions/actions'

//COMPONENTS
import Specialization from './Specialization'

//REFERENCES
import careersRef from '../../reference/careers.json'
import specializationsRef from '../../reference/specializations.json'
import skillsRef from '../../reference/skills.json'

export default class SpecializationSelection extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange( spec ) {
        this.props.changeCharacterSpecializtion(spec);
    }

    render() {
    	const {career} = this.props
        const {specialization} = this.props.character
        const specializations = careersRef[career].specializations.map( spec => <SpecializationButton
            key={spec}
            specKey={spec}
            specName={specializationsRef[spec].display_name}
            handleClick={this.handleChange} /> )

        return (

            <div>
                <div className="btn-group btn-group-justified" role="group">
                    {specializations}
                </div>
                <Specialization specialization = {specialization}/>
            </div>

        )
    }
}


class SpecializationButton extends Component {
    constructor(props) {
        super(props)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick() {
        this.props.handleClick( this.props.specKey )
    }

    render() {
        const {specKey, specName} = this.props
        return (
            <div 
                className = "btn-group"
                role="group"
                >
                <button
                    type="button"
                    className="btn btn-info"
                    name = {specKey}
                    onClick = {this.handleButtonClick}
                    value = {specKey} 
                    >
                    { specName }
                </button>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    return {
        character: getCharacter( state )
    };
}

export default connect (mapStateToProps, {
    changeCharacterSpecializtion } )( SpecializationSelection )
