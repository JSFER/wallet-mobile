import './Header.css'
import React from 'react'

export default class Header extends React.Component {
    onBack = () => {
        window.history.go(-1)
    }
    render() {
        return (
            <div className="m-header">
                <div className="back" onClick={this.onBack} />
                <span>{this.props.title}</span>
            </div>
        )
    }
}
