import React, {Component} from 'react'

import {Link} from 'react-router'

export default class Home extends Component {
    render() {
        return (
            <div className='text-center'>
                <Link className='btn btn-success btn-lg' to='/user'>Begin the Cloning Process</Link>
                <Link className='btn btn-info btn-lg' to='/'>Search Public Clone Plans</Link>
                <div>
                	<Link className='btn btn-warning btn-sm' to='/species'>Jump to Species</Link>
                	<Link className='btn btn-warning btn-sm' to='/career'>Jump to Career</Link>
                </div>
            </div>
        )
    }
}