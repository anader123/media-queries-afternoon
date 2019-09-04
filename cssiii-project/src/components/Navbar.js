import React, { Component } from 'react';
import './Navbar.css'

export default class Navbar extends Component {
    constructor() {
        super(); 

        this.state = {
            menu: false
        }
    };

    slideDown = () => {
        this.setState({
            menu: !this.state.menu
        })
    };



    render() {
        return (
            <div>
                <nav className='navbar'>
                    <h1 className='navbar-title'>Start Bootstrap</h1>
                    <div className='navbar-icon' onClick={this.slideDown}>
                        MENU &#9776; 
                    </div>
                    <ul className='navbar-menu'>
                        <li>SERVICES</li>
                        <li>PORTFOLIO</li>
                        <li>ABOUT</li>
                        <li>TEAM</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>

                <ul className={
                    this.state.menu  ?
                    'menu slide'
                    :
                    'menu'
                    }>
                        <li>SERVICES</li>
                        <li>PORTFOLIO</li>
                        <li>ABOUT</li>
                        <li>TEAM</li>
                        <li>CONTACT</li>
                </ul>
                <img className='desk-img' src='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freelogoservices.com%2Fblog%2Fwp-content%2Fuploads%2Flaptop-header-picture-id910806154.jpg&f=1'/>
            </div>
        )
    }
}
