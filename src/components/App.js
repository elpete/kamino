import React, {Component} from 'react'

import {Link} from 'react-router'

export default class App extends Component {
    render() {
        return (
          <div className='col-md-12'>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <span className="navbar-brand">Welcome to Kamino</span>
                </div>
                <div className="collapse navbar-collapse" id="navbar">
                  <div className="navbar-form navbar-right">
                    <Link className='btn btn-primary' to='/'>Back Home</Link>
                  </div>
                </div>
              </div>
            </nav>
            {this.props.children}
          </div>
        )
    }
}