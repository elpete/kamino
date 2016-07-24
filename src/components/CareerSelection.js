import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

//REDUCERS
import {getCharacter} from '../reducers/index'

//ACTIONS
import {changeCharacterCareer} from '../actions/actions'

//COMPONENTS
import Career from './Career'

//REFERENCES
import careers from '../../reference/careers.json'


export default class CareerSelection extends Component {
    componentDidMount(){
        this.careerSelect.focus()
    }

    handleChange(e){
        const newCareer = this.careerSelect.value
        this.props.changeCharacterCareer(newCareer);
    }

    toSpecies(e) {
        e.preventDefault();
        hashHistory.push('/species');
    }

    render() {
        const currentCareer = this.props.character.career
    	const careerOptions = Object.keys(careers).map(key => (
    	    <option value={key} key={key}>
    	        {careers[key].display_name}
    	    </option>
    	));

        return (

            <div className='well'>
                <form>
                    <div className='form-group'>
                        <label>Select a Career</label>
                        <select 
                            className='form-control'
                            ref = { select => this.careerSelect = select }
                            onChange = { this.handleChange.bind( this ) } 
                            value={currentCareer}>
                                {careerOptions}
                        </select>
                    </div>
                    <Career career={currentCareer}/>
                    <button 
                        onClick={this.toSpecies.bind(this)} 
                        className='btn btn-primary'> 
                        <span className="glyphicon glyphicon-menu-left"></span> Back to Species Selection
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

export default connect( mapStateToProps, { changeCharacterCareer } )( CareerSelection )































