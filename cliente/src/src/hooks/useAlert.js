import { useState } from 'react'

export const useAlert = (initialState) => {
    const [alert, setAlert] = useState(initialState);
    
    const fixAlert = ({text, show})=>{
        setAlert({text, show});
    }

    return {alert, fixAlert}
}
