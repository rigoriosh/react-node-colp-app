import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { UseAxios } from '../hooks/UseAxios'
import { rutes, textsApp } from '../constApp/constApp';
import Alert from './Alert';
import { useAlert } from '../hooks/useAlert';
import ShowInfo from './ShowInfo';

const Info = ({history}) => {

    const {respAxios, doRequeste} = UseAxios(); //hook para realizar las peticiones al servidor
    const [form, setForm] = useState({id:''}); //state para capturas infr5mación de los campos del formulario
    const {id} = form;
    const {alert, fixAlert} = useAlert({text:'', show: false});//hook para modificar texto y visualización del cuadro de información
    const {text, show} = alert; // desfracmentación de las variables del hook


    useEffect(() => { // esta pendiente si hay cambios en la respuesta desde axios        
        if(respAxios !== undefined){
            (typeof(respAxios) === 'string') //muestra u oculta el cuadro de texto
                ? fixAlert({text: respAxios, show: true})
                : fixAlert({text: '', show: false});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [respAxios])

    /* funcion que se ejecuta cuan el evento submit es activado */
    const getUserInfo = async (e) => {
        e.preventDefault();
        if (id !== '') { // si existe id ejecuta la colsuta al servidor
            doRequeste(rutes.info, {id}).catch(e => fixAlert({show: true, text:textsApp.error404}));
        }
    }
    return (
        <div className="container text-center mt-5">
            
            <button onClick={()=>history.goBack()} className="btn btn-primary">Log Out</button>
            <form onSubmit={getUserInfo} className="mt-5">
                <div className="mb-3 row shadow-lg p-3 mb-5 bg-body rounded">
                    <label className="col-sm-6 col-form-label">Ingresa tu Id para ver tu información</label>
                    <div className="col-sm-6">
                        {/* Imput para capturar el id del usuario */}
                        <input type="text" onChange={(e)=> setForm({...form, id:e.target.value})} className="form-control" value={id}/>
                    </div>
                </div> 

                {/* Componente alert en caso de mostrar esepciones */}
                { (show) && <Alert text={text}/> } 

                {/* boton submit */}
                <button type="submit" className="btn btn-success">Watch user info</button>
                
                {
                    /* Si existe data para mostra información de susario renderiza el siguiente bloque de codigo */
                    (typeof(respAxios) != 'string' && respAxios !== undefined)&& <ShowInfo data={respAxios}/>
                }
            </form>
        </div>
        
    )
}

Info.propTypes = {
    history: PropTypes.object.isRequired
}

export default Info
