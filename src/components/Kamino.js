import React, {Component} from 'react'

import species from '../../reference/species.json'

export default class Kamino extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            selectedSpecies: 'HUMAN'
        }
    }

    _selectSpecies(e) {
        this.setState({ selectedSpecies: e.target.value })
    }

    render() {
        const thisSpecies = species[this.state.selectedSpecies]

        const options = Object.keys(species).map(key => (
            <option value={key} key={key}>
                {species[key].display_name}
            </option>
        ));

        return (
            <div className='well col-md-12'>

                <form>
                    <div className='form-group'>
                        <label>To begin, please select a Species. <em>(For your convience, we have set the default species to 'Human'.)</em></label>
                        <select className='form-control'onChange={this._selectSpecies.bind(this)} value={this.state.selectedSpecies}>
                            {options}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Here are the characteristics for a {thisSpecies.display_name}.</label>

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
                                    <td>{thisSpecies.starting_characteristics.BRAWN}</td>
                                    <td>{thisSpecies.starting_characteristics.AGILITY}</td>
                                    <td>{thisSpecies.starting_characteristics.INTELLECT}</td>
                                    <td>{thisSpecies.starting_characteristics.CUNNING}</td>
                                    <td>{thisSpecies.starting_characteristics.WILLPOWER}</td>
                                    <td>{thisSpecies.starting_characteristics.PRESENCE}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className="btn btn-success">Confirm</button>
                </form>


            </div>
        )
    }
}