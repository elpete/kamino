import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import {getCharacterSpecies} from '../reducers/index'
import {changeCharacterSpecies} from '../actions/actions'

import species from '../../reference/species.json'

class SpeciesSelection extends Component {
    componentDidMount() {
        this.speciesSelect.focus()
    }

    handleChange(e) {
        this.props.changeCharacterSpecies(this.speciesSelect.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.changeCharacterSpecies(this.speciesSelect.value);
        hashHistory.push('/career');
    }

    render() {
        const currentSpecies = this.props.characterSpecies

        const speciesOptions = Object.keys(species).map(key => (
            <option value={key} key={key}>
                {species[key].display_name}
            </option>
        ));

        return (
            
            <div className='well'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='form-group'>
                        <label>Please select a Species.</label>
                        <select 
                            className='form-control'
                            ref={select => this.speciesSelect = select}
                            onChange={this.handleChange.bind(this)} 
                            value={currentSpecies}>
                                {speciesOptions}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Here are the starting characteristics for a {species[currentSpecies].display_name}.</label>

                        <table className='table table-bordered table-condensed'>
                            <thead>
                                <tr>
                                    <td>Brawn</td>
                                    <td>Agility</td>
                                    <td>Intellect</td>
                                    <td>Cunning</td>
                                    <td>Willpower</td>
                                    <td>Presence</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{species[currentSpecies].starting_characteristics.BRAWN}</td>
                                    <td>{species[currentSpecies].starting_characteristics.AGILITY}</td>
                                    <td>{species[currentSpecies].starting_characteristics.INTELLECT}</td>
                                    <td>{species[currentSpecies].starting_characteristics.CUNNING}</td>
                                    <td>{species[currentSpecies].starting_characteristics.WILLPOWER}</td>
                                    <td>{species[currentSpecies].starting_characteristics.PRESENCE}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button type='submit' className='btn btn-success'> Continue to Career Selections</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        characterSpecies: getCharacterSpecies(state)
    };
}

export default connect(mapStateToProps, { changeCharacterSpecies })(SpeciesSelection)