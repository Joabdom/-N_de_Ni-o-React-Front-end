import React, { Component } from 'react'
import Back from '../back/back'
import Nav from '../nav/nav'
import Body from '../body/body'
import Footer from '../footer/footer'

export class Home extends Component {
    render() {
        return (
            <div>
                <Back></Back>
                <Nav></Nav>
                <Body></Body>
                <Footer></Footer>

            </div>
        )
    }
}

export default Home
