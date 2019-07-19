import React, { Component } from 'react'
import img from '../assets/logofinal.png'
import {Link} from 'react-router-dom'

export class Nav extends Component {
    render() {
        return (
            <div className="navb">
                <img src={img} alt="logo" className="custom-navb" />
                <Link to="/User">
                    <button className="btn btn-dark btn login">Ingresa</button> 
                </Link> 
            </div>
        )
    }
}
export default Nav
