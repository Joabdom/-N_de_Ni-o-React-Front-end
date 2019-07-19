import React, { Component } from 'react'
import img from '../assets/woman.png'
import img1 from '../assets/childj.png'

export class Results extends Component {
    render() {
        return (
            <div className="cards">
                <div className="cardwoman">
                    <div className="card mb-3 custom-card" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src= {img} className="card-img" alt="she"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Nombre: María Luisa García Hernández</h5>
                                    <ul className="data">
                                        <li>Edad:27</li>
                                        <li>Entidad:CDMX</li>
                                        <li>Hijos:5</li>
                                        <li>Ocupación:Emprendedora</li>
                                        <li>Est. Civil:Casada</li>
                                        <li>Desceso: 17-07-2019</li>
                                        <li>Carp Inv: 9428064178532</li>
                                        <li>MP: Juan Torres Súarez</li>
                                    </ul>
                                    <p className="card-text"><small className="text-muted">Actualizado hace 2 semanas</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardchild">
                    <div className="card mb-3 custom-child" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src= {img1} className="card-img" alt="she"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Nombre: Joan Daniel García Hernández</h5>
                                    <ul className="data">
                                        <li>Edad:8</li>
                                        <li>Entidad:CDMX</li>
                                        <li>Hijos:S/I</li>
                                        <li>Ocupación:Estudiante</li>
                                        <li>Est. Civil: Soltero</li>
                                        <li>Desceso: Vivo</li>
                                        {/* <li>Carp Inv: 9428064178532</li>
                                        <li>MP: Juan Torres Súarez</li> */}
                                    </ul>
                                    <p className="card-text"><small className="text-muted">Actualizado hace 2 semanas</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results
