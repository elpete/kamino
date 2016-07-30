import React, {Component, PropTypes} from 'react'

export default class Characteristic extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    }

    render() {
        const {name, value} = this.props
        return (
            <div className="col-sm-2">
                <div className={`panel panel-characteristic panel-${name.toLowerCase()}`}>
                    <div className="panel-heading">{name}</div>
                    <div className="panel-body">
                        {value}
                    </div>
                </div>
            </div>
        )
    }
}

export class BrawnCharacteristic extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    }

    render() {
        const {value} = this.props
        return (
            <Characteristic name="Brawn" value={value} />
        )
    }
}

export class AgilityCharacteristic extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    }

    render() {
        const {value} = this.props
        return (
            <Characteristic name="Agility" value={value} />
        )
    }
}

export class IntellectCharacteristic extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    }

    render() {
        const {value} = this.props
        return (
            <Characteristic name="Intellect" value={value} />
        )
    }
}

export class CunningCharacteristic extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    }

    render() {
        const {value} = this.props
        return (
            <Characteristic name="Cunning" value={value} />
        )
    }
}

export class WillpowerCharacteristic extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    }

    render() {
        const {value} = this.props
        return (
            <Characteristic name="Willpower" value={value} />
        )
    }
}

export class PresenceCharacteristic extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    }

    render() {
        const {value} = this.props
        return (
            <Characteristic name="Presence" value={value} />
        )
    }
}