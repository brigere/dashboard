import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <Link to={'/'+this.props.link} className="nav-link collapsed">
                <i className={this.props.icon} />
                <span>{this.props.title}</span>
                </Link>
            </li>
        )
    }
}
