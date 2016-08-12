import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

//REDUCERS
import { getCharacter } from '../reducers/index'

//ACTIONS
import { 
    changeCharacterSpecies, 
    changeCharacterCharacteristics
} from '../actions/actions'

//COMPONENTS
import Characteristics from './Characteristics'


//REFERENCES
import speciesRef from '../../reference/species.json'
import careerRef from '../../reference/careers.json'

export default class SpeciesSelection extends Component {
    componentDidMount() {
        this.speciesSelect.focus()
    }

    handleChange(e) {
        const newSpecies = this.speciesSelect.value
        this.props.changeCharacterSpecies(newSpecies);
        this.props.changeCharacterCharacteristics({
            brawn: speciesRef[newSpecies].starting_characteristics.BRAWN,
            agility: speciesRef[newSpecies].starting_characteristics.AGILITY,
            intellect: speciesRef[newSpecies].starting_characteristics.INTELLECT,
            cunning: speciesRef[newSpecies].starting_characteristics.CUNNING,
            willpower: speciesRef[newSpecies].starting_characteristics.WILLPOWER,
            presence: speciesRef[newSpecies].starting_characteristics.PRESENCE,
        })
    }

    toCareer(e) {
        e.preventDefault();
        hashHistory.push('/career');
    }

    toUser(e) {
        e.preventDefault();
        hashHistory.push('/user')
    }

    render() {
        const {species} = this.props.character
        const {
            brawn, 
            agility, 
            intellect, 
            cunning, 
            willpower, 
            presence
        } = this.props.character.characteristics
        const speciesOptions = Object.keys(speciesRef).map(key => (
            <option value={key} key={key}>
                {speciesRef[key].display_name}
            </option>
        ));

        const base_wound = speciesRef[species].base_wound_threshold;
        const base_strain = speciesRef[species].base_strain_threshold;
        const starting_xp = speciesRef[species].starting_xp;

        return (
            
            <div className = "well">
                <div className = "row form-group form-group-lg">
                    <h3 className = "text-center">Select a Species</h3>
                    <div className = "col-sm-offset-3 col-sm-6">
                        <select 
                            className = "form-control"
                            ref = { select => this.speciesSelect = select }
                            onChange = { this.handleChange.bind( this ) } 
                            value = { species }
                        >
                            { speciesOptions }
                        </select>
                    </div>
                </div>
                <div className = "well">

                    <div className = "row text-center">
                        <div className = "col-sm-6">
                            <h4>Description</h4>
                            <p>{ speciesRef[species].description }</p>
                        </div>
                        <div className = "col-sm-6">
                            <h4>Abilities</h4>
                            <p><em>Coming Soon...</em></p>
                        </div>
                    </div>

                    <div className = "row">
                        <h4 className = "text-center">Starting Characteristics</h4>
                        <Characteristics
                            brawn = { brawn }
                            agility = { agility }
                            intellect = { intellect }
                            cunning = { cunning }
                            willpower = { willpower }
                            presence = { presence } 
                        />
                    </div>

                    <div className = "row text-center">
                        <div className = "col-sm-4">
                            <h5>Wound Threshold</h5>
                            <h4> <span className = "label label-default">{ base_wound } + Brawn</span></h4>
                        </div>
                        <div  className = 'col-sm-4'>
                            <h5>Strain Threshold</h5>
                            <h4><span className = "label label-default">{ base_strain } + Willpower</span></h4>
                        </div>
                        <div  className = 'col-sm-4'>
                            <h5>Starting XP</h5>
                            <h4><span className = "label label-default">{ starting_xp }</span></h4>
                        </div>
                    </div>
                </div>

                <button 
                    onClick = { this.toUser.bind( this ) } 
                    className = "btn btn-primary"> 
                    <span className = "glyphicon glyphicon-menu-left"></span> Back to User Name
                </button>
                <button 
                    onClick={ this.toCareer.bind( this ) } 
                    className = "btn btn-primary pull-right"> 
                    Continue to Career Selection <span className = "glyphicon glyphicon-menu-right"></span>
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

export default connect( mapStateToProps, { 
    changeCharacterSpecies, 
    changeCharacterCharacteristics 
    } )( SpeciesSelection )