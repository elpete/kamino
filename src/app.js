import React, {Component} from 'react'
import {render} from 'react-dom'

import Root from './containers/Root'
import store from './store'

render(
    <Root store={store} />,
    document.getElementById('app')
)