import React, { Component } from 'react'
import img from '../assets/logo-favicon.png'


export class User extends Component {
    render() {
        return (
            <div className="user">
                <form className="form-signin">
                    <img className="mb-4" src={img} alt="child" width="100" height="100"/>
                    <h1 className="h3 mb-3 font-weight-normal">Ingresa</h1>
                    <label for="inputUsername" className="sr-only">Usuario</label>
                    <input type="username" id="#" className="custom-formcontrol" placeholder="Usuario" required=""></input>
                    <label for="inputEmail" className="sr-only">Correo</label>
                    <input type="email" id="#" className="custom-email" placeholder="Correo" required=""></input>
                    <label for="inputEmail" className="sr-only">Correo</label>
                    <input type="password" id="#" className="custom-password" placeholder="Contraseña" required=""></input>
                    <button className="btn btn-dark btn login">Entrar</button> 
                </form>
            </div>
        )
    }
}

export default User
