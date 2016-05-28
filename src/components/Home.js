import React, {Component} from 'react'

import {Link} from 'react-router'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link className='btn btn-primary' to='/user'>Begin the Cloning Process</Link>
            </div>
        )
    }
}