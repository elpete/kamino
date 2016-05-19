import React, {Component} from 'react'
import {render} from 'react-dom'

import Talent from './components/Talent'

class App extends Component {
    render() {
        return (
            <div>
                Hello, {this.props.name}!
                <Talent id={1} />
            </div>
        )
    }
}

App.defaultProps = {
    name: 'Mike'
}

render(
    <App name='Eric' />,
    document.getElementById('app')
)