import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import {getPlayerName} from '../reducers/index'
import {changePlayerName} from '../actions/actions'

class PlayerNameEntry extends Component {
    componentDidMount() {
        this.nameInput.focus()
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.changePlayerName(this.nameInput.value);
        hashHistory.push('/species')
    }

    render() {
        return (
            <div className='well'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='form-group'>
                        <label>By what name should we refer to you during your visit to our facilities?</label>
                        <input
                            type='text'
                            className='form-control'
                            ref={input => this.nameInput = input}
                            defaultValue={this.props.playerName}
                        />
                    </div>
                    <button type='submit' className='btn btn-success'>Contine to Species Selection</button>
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