import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import {getCharacter} from '../reducers/index'
import {changeCharacterSpecies} from '../actions/actions'

import species from '../../reference/species.json'

class SpeciesSelection extends Component {
    componentDidMount() {
        this.speciesSelect.focus()
        console.log(this.props.character)
    }

    handleChange(e) {
        this.props.changeCharacterSpecies(this.speciesSelect.value);
    }

    toCareer(e) {
        e.preventDefault();
        this.props.changeCharacterSpecies(this.speciesSelect.value);
        hashHistory.push('/career');
    }

    toUser(e) {
        e.preventDefault();
        this.props.changeCharacterSpecies(this.speciesSelect.value);
        hashHistory.push('/user')
    }

    render() {
        const currentSpecies = this.props.character.species

        const speciesOptions = Object.keys(species).map(key => (
            <option value={key} key={key}>
                {species[key].display_name}
            </option>
        ));

        return (
            
            <div className='well'>
                <form>
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
                    <label>Here are the starting characteristics for a {species[currentSpecies].display_name}.</label>
                    <div>
                        <div className="col-sm-2">
                            <div className="panel panel-brawn">
                                <div className="panel-heading">Brawn</div>
                                    <div className="panel-body">
                                        {species[currentSpecies].starting_characteristics.BRAWN}
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="panel panel-agility">
                                <div className="panel-heading">Agility</div>
                                    <div className="panel-body">
                                        {species[currentSpecies].starting_characteristics.AGILITY}
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="panel panel-intellect">
                                <div className="panel-heading">Intellect</div>
                                    <div className="panel-body">
                                        {species[currentSpecies].starting_characteristics.INTELLECT}
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="panel panel-cunning">
                                <div className="panel-heading">Cunning</div>
                                    <div className="panel-body">
                                        {species[currentSpecies].starting_characteristics.CUNNING}
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="panel panel-willpower">
                                <div className="panel-heading">Willpower</div>
                                    <div className="panel-body">
                                        {species[currentSpecies].starting_characteristics.WILLPOWER}
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="panel panel-presence">
                                <div className="panel-heading">Presence</div>
                                    <div className="panel-body">
                                        {species[currentSpecies].starting_characteristics.PRESENCE}
                                    </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.toUser.bind(this)} className='btn btn-primary'> 
                        <span className="glyphicon glyphicon-menu-left"></span> Back to User Name
                    </button>
                    <button onClick={this.toCareer.bind(this)} className='btn btn-primary pull-right'> 
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

export default connect(mapStateToProps, { changeCharacterSpecies })(SpeciesSelection)