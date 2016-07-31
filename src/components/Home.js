import React, {Component} from 'react'
import {hashHistory} from 'react-router'


export default class Home extends Component {

    toUser(e) {
        e.preventDefault();
        hashHistory.push('/user')
    }

    toSpecies(e) {
        e.preventDefault();
        hashHistory.push('/species')
    }

    toCareer(e) {
        e.preventDefault();
        hashHistory.push('/career');
    }

    render() {
        return (
            <div className = 'well' style={{'textAlign':'center'}}>
                <form>
                    <div className="form-group">
                        <button 
                            onClick={ this.toUser.bind( this ) } 
                            className='btn btn-success btn-lg btn-block'> 
                            Begin the Cloning Process <span className="glyphicon"></span>
                        </button>
                    </div>

                    <div className="form-group">
                        <div className="btn-group" role="group">
                              <button 
                                onClick={ this.toSpecies.bind( this ) } 
                                className='btn btn-primary btn-sm'> 
                                <span className="glyphicon"></span> Jump to Species Selection
                            </button>
                            <button 
                                onClick={ this.toCareer.bind( this ) } 
                                className='btn btn-primary btn-sm'> 
                                Jump to Career Selection <span className="glyphicon"></span>
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}