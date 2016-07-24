import React, {Component, PropTypes} from 'react'

//COMPONENTS
import Specialization from './Specialization'

//REFERENCES
import careers from '../../reference/careers.json'
import specializationsRef from '../../reference/specializations.json'
import skills from '../../reference/skills.json'

export default class Specializations extends Component {
    render() {
    	const {career} = this.props
    	const specializations = careers[career].specializations.map( key => (
    		<button value = {key} key = {key} className = "btn btn-info">
    			{specializationsRef[key].display_name}
    		</button> 
    	));
        return (
            <div>
                {specializations}
            </div>
        )
    }
}