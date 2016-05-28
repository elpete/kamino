import React, {Component} from 'react'

import {Link} from 'react-router'

export default class UserNameEntry extends Component {

	constructor(props) {
	    super(props)
	    this.state = {
	        userName: 'Syfo Dias'
	    }
	}

    render() {

        return (
            <div className='well'>
                <form>
                    <div className='form-group'>
                        <label>By what name should we refer to you during your visit to our facilities?</label>
                        <input></input>
                    </div>
                    <Link className='btn btn-primary' to='/species'>Contine to Species Selection</Link>
                </form>
            </div>
        )
    }
}