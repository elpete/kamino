import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {getPlayerName} from '../reducers/index'
import {getCharacterName} from '../reducers/index'

class App extends Component {
    render() {
        return (
          <div className='col-md-12'>
            <nav className='navbar navbar-default'>
              <div className='container-fluid'>
                <div className='navbar-header'>
                  <span className='navbar-brand'>
                    Welcome to Kamino
                    {this.props.playerName &&
                      <span>, {this.props.playerName}</span>
                    }
                  </span>
                </div>
                <div className='collapse navbar-collapse' id='navbar'>
                  <div className='navbar-form navbar-right'>
                    <Link className='btn btn-default' to='/'>Back Home</Link>
                  </div>
                </div>
              </div>
            </nav>
            {this.props.children}
          </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
  return {
    playerName: getPlayerName(state)
  }
}

export default connect(mapStateToProps)(App)