import React, {Component} from 'react'
import {hashHistory} from 'react-router'

export default class UserNameEntry extends Component {
    handleSubmit(e) {
        hashHistory.push('/species')
    }

    render() {
        return (
            <div className='well'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>By what name should we refer to you during your visit to our facilities?</label>
                        <input type='text' className='form-control' ref={input => { if (input) input.focus() }} />
                    </div>
                    <button type='submit' className='btn btn-success'>Contine to Species Selection</button>
                </form>
            </div>
        )
    }
}