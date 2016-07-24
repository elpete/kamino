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
import species from '../../reference/species.json'

export default class SpeciesSelection extends Component {
    componentDidMount() {
        this.speciesSelect.focus()
    }

    handleChange(e) {
        const newSpecies = this.speciesSelect.value
        this.props.changeCharacterSpecies(newSpecies);
        this.props.changeCharacterCharacteristics({
            brawn: species[newSpecies].starting_characteristics.BRAWN,
            agility: species[newSpecies].starting_characteristics.AGILITY,
            intellect: species[newSpecies].starting_characteristics.INTELLECT,
            cunning: species[newSpecies].starting_characteristics.CUNNING,
            willpower: species[newSpecies].starting_characteristics.WILLPOWER,
            presence: species[newSpecies].starting_characteristics.PRESENCE,
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
        const currentSpecies = this.props.character.species        
        const {brawn, agility, intellect, cunning, willpower, presence} = this.props.character.characteristics
        const speciesOptions = Object.keys(species).map(key => (
            <option value={key} key={key}>
                {species[key].display_name}
            </option>
        ));

        return (
            
            <div className='well'>
                <form>
                    <div className='form-group'>
                        <label>Select a Species.</label>
                        <select 
                            className='form-control'
                            ref = { select => this.speciesSelect = select }
                            onChange = { this.handleChange.bind( this ) } 
                            value={currentSpecies}>
                                {speciesOptions}
                        </select>
                    </div>
                    <label>Starting Characteristics</label>
                    <Characteristics
                        brawn={brawn}
                        agility={agility}
                        intellect={intellect}
                        cunning={cunning}
                        willpower={willpower}
                        presence={presence} />
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