import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

//REDUCERS
import {getCharacter} from '../reducers/index'

//ACTIONS
import {
    changeCharacterCareer,
    changeCharacterSpecializtion
} from '../actions/actions'

//COMPONENTS
import Career from './Career'

//REFERENCES
import careersRef from '../../reference/careers.json'


export default class CareerSelection extends Component {
    componentDidMount(){
        this.careerSelect.focus()
    }

    handleCareerChange( e ){
        const selectedCareer = this.careerSelect.value;
        const defaultCareerSpec = careersRef[selectedCareer].specializations[0];
        this.props.changeCharacterCareer(selectedCareer);
        this.props.changeCharacterSpecializtion(defaultCareerSpec);
    }

    toSpecies( e ) {
        e.preventDefault();
        hashHistory.push('/species');
    }

    render() {
        const currentCareer = this.props.character.career
        const careerOptions = Object.keys(careersRef).map(key => (
            <option value={key} key={key}>
                {careersRef[key].display_name}
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
                            onChange = { this.handleCareerChange.bind( this ) } 
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

export default connect( mapStateToProps, { changeCharacterCareer, changeCharacterSpecializtion } )( CareerSelection )
