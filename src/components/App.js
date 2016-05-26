import React, {Component} from 'react'

import {Link} from 'react-router'

export default class App extends Component {
    render() {
        return (
            <div className='col-md-12'>
	        	<nav className="navbar navbar-default">
					<h3>Welcome to Kamino
						<Link className='btn btn-primary pull-right' to='/'>Back Home</Link>
					</h3>
				</nav>
                {this.props.children}
            </div>
        )
    }
}