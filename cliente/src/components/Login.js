import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { constsLogin, rutes, textsApp } from '../constApp/constApp';
import { UseAxios } from '../hooks/UseAxios';
import { useAlert } from '../hooks/useAlert';
import Alert from './Alert';
import Table from './Table';
import { Loading } from './Loading';

const Login = ({history}) => {

    /* habilita componente loading */
    const [loading, setLoading] = useState(false);

    /* state para captura información de los campos del formulario */
    const [form, setForm] = useState({lastname: '', ID: ''});
    const {lastname, ID} = form;
    
    /* hook para realizar peticiones a travez de axios */
    const {respAxios, doRequeste} = UseAxios();
    
    /* hook alert para mostrar esepciones */
    const {alert, fixAlert} = useAlert({text:'', show: false});
    const {text, show} = alert;

    /* effec que captura cambios en la respuesta desde el servidor a travez de axios */
    useEffect(() => {        
        if (respAxios !== undefined) {            
            const {msg} = respAxios;            
            /* si todo esta bien redirecciona a la vista de info del usuario, de lo contrario captura
                la esepción y la renderiza  */
            setLoading(false);
            (msg === constsLogin.msgAPI) ? history.push(rutes.info): fixAlert({text: msg, show:true});             
        }
        return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [respAxios])

    /* campura el evento submit */
    const login = async(e) => {
        e.preventDefault();
        /* si los campos de formulario estan ok realiza la consulta al servidor a travez de hook axios, y renderiza esepciones
            si las hay  */
        if(validarCampos()){
            doRequeste(rutes.login, {lastname, ID}).catch(e => {
                    fixAlert({text:textsApp.error404, show: true})
                    setLoading(false);
                }
            );
            setLoading(true);
        }
    }
    const validarCampos = () => {        
        if (lastname !== '' && ID !== ''){
            fixAlert({text: '', show: false});            
            return true;
        } 
        fixAlert({text: textsApp.errorValidations, show: true});
        return false;
    }
    return (
        <div className="container text-center mt-5">
            <h1>Login</h1>
            <form onSubmit={login}>
                <div className="mb-3 row">
                    <label className="col-sm-4 col-form-label">User name</label>
                    <div className="col-sm-8">
                        {/* input que captura el nombre del usuario */}
                        <input type="text" onChange={(e)=> setForm({...form, lastname:e.target.value})} className="form-control" value={lastname}/>
                    </div>
                </div>                
                <div className="mb-3 row">
                    <label className="col-sm-4 col-form-label">Password </label>
                    <div className="col-sm-8">
                        {/* input que captura la contraseña del usuario */}
                        <input type="password" className="form-control" value={ID} onChange={(e)=> setForm({...form, ID:e.target.value})}/>
                    </div>
                </div>

                {/* Si hay esepciones las renderiza a traves del componente Alert */}
                { (show) && <Alert text={text}/> }

                {/* Boton submit */}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            { loading && <Loading/> }
            <div>
                {   
                    (respAxios !== undefined) && 
                    <>
                        <h5 className="mt-3">Datos de prueba</h5>
                        <Table data={respAxios.db}/>
                        </>
                    }                
            </div>
        </div>
    )
}

Login.prototype = {
    history: PropTypes.object.isRequired
}


export default Login
