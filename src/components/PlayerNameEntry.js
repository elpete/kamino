import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import {getPlayerName} from '../reducers/index'
import {changePlayerName} from '../actions/actions'

class PlayerNameEntry extends Component {
    componentDidMount() {
        this.nameInput.focus()
    }

    toSpecies(e) {
        e.preventDefault();
        this.props.changePlayerName(this.nameInput.value);
        hashHistory.push('/species');
    }

    render() {
        return (
            <div className='well'>
                <form>
                    <div className='form-group'>
                        <label>By what name should we refer to you during your visit to our facilities?</label>
                        <input
                            type='text'
                            className='form-control'
                            ref={input => this.nameInput = input}
                            defaultValue={this.props.playerName}
                        />
                    </div>
                    <button onClick={this.toSpecies.bind(this)} className='btn btn-primary'> 
                        Continue to Species Selection <span className="glyphicon glyphicon-menu-right"></span>
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        playerName: getPlayerName(state)
    };
}

export default connect(mapStateToProps, { changePlayerName })(PlayerNameEntry)