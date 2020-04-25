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
            
            <div className="App">
      
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/664f45f6-ee6c-419d-8113-5153b74fae7b/d6ly91p-037fbc4d-ab8f-4e70-ad90-75b820f6b939.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY2NGY0NWY2LWVlNmMtNDE5ZC04MTEzLTUxNTNiNzRmYWU3YlwvZDZseTkxcC0wMzdmYmM0ZC1hYjhmLTRlNzAtYWQ5MC03NWI4MjBmNmI5MzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wYzlwENqO7ow8aP6Hdc2xErL9yF152-ME9I6u7KvbA0" 
            align='left'
            width='380'
        
        
        />
        <h6>Ingrese sus datos para el registro</h6>
      </div>
            <form className="inline" onSubmit={enviarDatos}>
            
            <div className="col-sm-4 input-group">
                <div className="input-group-prepend"></div>
                <div className="input-group-text">
                <i className="fa fa-user"></i>
                
                </div>
                    <input 
                        
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
                        
                        type="number"
                        name="phone"
                        onChange={handleInputChange}
                        className="form-control"></input>
                </div>
                <div className="col-sm-4 input-group">
                    <button 
                        className="btn btn-success" 
                        type="submit"
                        
                        display="inline-block"  
                        >Enviar
                         
                    </button>
                        
                </div>


                

                
                
            </form>



            <label>Gracias por registrar tus datos</label><br/>
            <label>Tus datos son los siguientes:</label><br/>
            <label>Usuario: {datos.user}</label><br/>
            <label>Email: {datos.email}</label><br/>
            <label>Contraseña: {datos.key}</label><br/>
            <label>Teléfono: {datos.phone}</label>
        </Fragment>
        
        
    );
}
export default Formulario;