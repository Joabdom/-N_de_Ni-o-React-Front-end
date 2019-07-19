import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


export class Body extends Component {
    constructor(){
        super()
        this.state = {
            name:"",
            last_name:"",
            age:"",
            curp:"",
            location:"",
            last_occupation:"",
            num_of_children:"",
            civil_state:"",
            date_decease:"",
            legal_status:"",
            research_folder:"",
            img:"",
            listaPerdidas: [],
        }
    }

    onInputChange=(e)=>{
        e.preventDefault()
        console.log(e.target)
        const finder = this.state.listaPerdidas.filter((element) => e.target.value === element.name)
        if(finder.length === 0 ){
            alert('NO se encontro a nadie')
        }else{
            alert(finder[0].name)
        }
        
    }

    componentDidMount(){
        const URL = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(URL)
        .then((listaObjetos) => {
            console.log(listaObjetos)
            this.setState({
                listaPerdidas:listaObjetos.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

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
                 <input className="text" placeholder="Ingresa un nombre" value={this.state.value}></input>
                 <Link to="/results">
                    <button className="btn btn-dark btn-lg custom-buscar" onClick={this.onInputChange}>Buscar</button>
                </Link>
                 {/* <a className="btn btn-dark btn-lg custom-buscar" href='../results/results.jsx' role="button">Buscar</a> */}
                </div>
            </div>
        )
    }
}
export default Body
