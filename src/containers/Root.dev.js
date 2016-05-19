import React, {Component} from 'react'
import {Provider} from 'react-redux'
import routes from '../config/routes'
import DevTools from './DevTools'

export default class Root extends Component {
    render() {
        const {store} = this.props
        return (
            <Provider store={store}>
                <div>
                    {routes}
                    <DevTools />
                </div>
            </Provider>
        )
    }
}