import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class Body extends Component {
    render() {
        return (
            <div className='jumbotron-bg-null p-5 custom-jumb'>
                 <h1>¿Y mi mamá?</h1>
                 <p className='lead'>En México al menos <span className="seis">6 de cada 10 mujeres</span> mexicanas ha enfrentado un incidente de violencia. El 41.3% de las mujeres ha sido víctima de violencia sexual, desapariciones y, en su forma más extrema, nueve mujeres son asesinadas al día, de acuerdo con datos estadísticos de distintos organismos.</p>
                 <hr className="my-4 custom-hr"></hr>
                 <p><span className="Vanished">"N de Niña[o]"</span> ayuda a las familias que han sufrido desaparción forzada, dejando a cientos de niños sin madres.</p>
                 <p>Ingresa un nombre para obtener mayor información.</p>
                 {/* <input className="text" placeholder="María Luisa García Hernández"></input>
                 <a className="btn btn-dark btn-lg custom-buscar" href="#" role="button">Buscar</a> */}
                <div className="submit">
                 <input className="text" placeholder="María Luisa García Hernández"></input>
                 <Link to="/results">
                    <button className="btn btn-dark btn-lg custom-buscar">Buscar</button>
                </Link>
                 {/* <a className="btn btn-dark btn-lg custom-buscar" href='../results/results.jsx' role="button">Buscar</a> */}
                </div>
            </div>
        )
    }
}
export default Body
