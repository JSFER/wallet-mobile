import './NavBar.css'
import React from 'react'

export default class NavBar extends React.Component{
    render(){
        return (
            <div className="m-navbar">
                <ul>
                    <li>全部</li>
                    <li>类别一</li>
                    <li>类别二</li>
                </ul>
            </div>
        )
    }
}