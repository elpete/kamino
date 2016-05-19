import React, {Component} from 'react'

import {Link} from 'react-router'

export default class App extends Component {
    render() {
        return (
            <div>
                App
                <Link to='/'>Back Home</Link>
                {this.props.children}
            </div>
        )
    }
}