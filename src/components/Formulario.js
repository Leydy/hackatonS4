import React, {Fragment, useState} from 'react';

const Formulario = () => {
    const [datos, setDatos] = useState({
        user: '',
        email: '',
        key: '',
        phone: ''
    })
    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.user + ' ' + datos.email + ' ' + datos.key + ' ' + datos.phone)
    }
    return(
        <Fragment>
            <h6>Ingrese sus datos para el registro</h6>
            <form className="inline" onSubmit={enviarDatos}>
            <div className="col-sm-4 input-group">
                <div className="input-group-prepend"></div>
                <div className="input-group-text">
                <i className="fa fa-user"></i>
                
                </div>
                    <input 
                        placeholder="Ingrese usuario"
                        type="text"
                        name="user"
                        onChange={handleInputChange}
                        className="form-control"></input>
                </div>
                <div className="col-sm-4 input-group">
                <div className="input-group-prepend"></div>
                <div className="input-group-text">
                <i className="fa fa-envelope"></i>
                
                </div>
                    <input 
                        placeholder="Ingrese correo"
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        className="form-control"></input>
                </div>

                <div className="col-sm-4 input-group">
                <div className="input-group-prepend"></div>
                <div className="input-group-text">
                <i className="fa fa-key"></i>
                
                </div>
                    <input 
                        placeholder="Ingrese clave"
                        type="password"
                        name="key"
                        onChange={handleInputChange}
                        className="form-control"></input>
                </div>

                        
                <div className="col-sm-4 input-group">
                <div className="input-group-prepend">
                <div className="input-group-text">
                <i className="fa fa-phone"></i>
                </div>
                </div>
                    <input 
                        placeholder="Ingrese teléfono"
                        type="number"
                        name="phone"
                        onChange={handleInputChange}
                        className="form-control"></input>
                </div>
                <div className="col-sm-5">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                    
                </div>


                

                
                
            </form>




            <h3>{datos.nombre}-{datos.apellido}</h3>
        </Fragment>
        
        
    );
}
export default Formulario;