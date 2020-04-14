import React, {createContext,useEffect,useReducer} from 'react';
import AdminReducer from '../reducers/AdminReducer'
export const AdminContext = createContext();

const AdminContextProvider = ({ children }) =>{
    const [mode ,dispatch] = useReducer(AdminReducer, [],()=>{
        const mood =localStorage.getItem('mode')
        if(mood){
            return JSON.parse(mood)
        }
        else{
            return []
        }
    });
    
     useEffect(()=>{
         localStorage.setItem('mode',JSON.stringify(mode))
     },[mode])
    return (
        <AdminContext.Provider value={{ mode , dispatch}}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;