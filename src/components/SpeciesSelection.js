import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

//REDUCERS
import {getCharacter} from '../reducers/index'

//ACTIONS
import {changeCharacterSpecies, changeCharacterCharacteristics} from '../actions/actions'

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
        const {brawn, agility, intellect, cunning, willpower, presence} = this.props.character.characteristics
        const speciesOptions = Object.keys(speciesRef).map(key => (
            <option value={key} key={key}>
                {speciesRef[key].display_name}
            </option>
        ));

        const base_wound = speciesRef[species].base_wound_threshold;
        const base_strain = speciesRef[species].base_strain_threshold;
        const starting_xp = speciesRef[species].starting_xp;


        const activeAbilities = (speciesRef[species].special_abilities.active).map(key => (
            <li value={key} key={key}>
                {key}
            </li>
        ));

        const passiveAbilities = (speciesRef[species].special_abilities.passive).map(key => (
            <li value={key} key={key}>
                {key}
            </li>
        ));

        return (
            
            <div className='well'>
                <form>
                    <div className='form-group'>
                        <label>Select a Species</label>
                        <select 
                            className='form-control'
                            ref = { select => this.speciesSelect = select }
                            onChange = { this.handleChange.bind( this ) } 
                            value={species}>
                                {speciesOptions}
                        </select>
                    </div>
                    <div className="well">
                        <h5>Description</h5>
                        <p>{speciesRef[species].description}</p>
                        <h5>Starting Characteristics</h5>
                        <Characteristics
                            brawn={brawn}
                            agility={agility}
                            intellect={intellect}
                            cunning={cunning}
                            willpower={willpower}
                            presence={presence} />
                        
                        <div className='row'>
                            <div className='col-sm-4'>
                                <h5>Wound Threshold</h5>
                                <p>{base_wound} + Brawn</p>
                            </div>
                            <div  className='col-sm-4'>
                                <h5>Strain Threshold</h5>
                                <p>{base_strain} + Willpower</p>
                            </div>
                            <div  className='col-sm-4'>
                                <h5>Starting XP</h5>
                                <p>{starting_xp}</p>
                            </div>
                        </div>
                        
                        
                        <h5>Active Abilities</h5>
                        <ul>
                            {activeAbilities}
                        </ul>
                        
                        <h5>Passive Abilities</h5>
                        <ul>
                           {passiveAbilities}
                        </ul>
                    </div>

                    <button 
                        onClick={ this.toUser.bind( this ) } 
                        className='btn btn-primary'> 
                        <span className="glyphicon glyphicon-menu-left"></span> Back to User Name
                    </button>
                    <button 
                        onClick={ this.toCareer.bind( this ) } 
                        className='btn btn-primary pull-right'> 
                        Continue to Career Selection <span className="glyphicon glyphicon-menu-right"></span>
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        character: getCharacter(state)
    };
}

export default connect(mapStateToProps, { changeCharacterSpecies, changeCharacterCharacteristics } )( SpeciesSelection )