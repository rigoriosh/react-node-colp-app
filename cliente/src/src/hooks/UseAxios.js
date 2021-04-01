import axios from 'axios';
import {useState } from 'react'

export const UseAxios = () => {
    const [respAxios, setAxios] = useState();

    const doRequeste = async(path, params) => {
        const url = `${process.env.REACT_APP_API_URL}${path}`;
        //const url = `http://localhost:8888${path}`;       
        const resp = await axios.get(url, { params });
        setAxios(resp.data)
    } 
    
    return {respAxios, doRequeste};
}
