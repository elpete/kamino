import React, {Component, PropTypes} from 'react'

//REFERENCES
import specRef from '../../reference/specializations.json'

export default class Specialization extends Component {
    render() {
    	const {specialization} = this.props

        return (

            <div>
                {specialization}
            </div>
        )
    }
}