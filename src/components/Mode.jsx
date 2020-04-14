import React ,{useContext} from 'react'
import { AdminContext } from '../contexts/AdminContext'
import {FaCloudMoon , FaSun} from 'react-icons/fa'
export default function Mode() {
    const { mode ,dispatch} = useContext(AdminContext);
    const changeMood = ()=>{
        const mood = mode === 'dark' ? 'light' :'dark' 
        dispatch({type : 'CHANGE_MODE',mode : mood })
    }
    return (
        <div className='mode' onClick={changeMood}>
            <FaCloudMoon 
             style={ mode === "light" ? {transform : 'translateX(150px)'}:''}
            />
            <FaSun 
             style={ mode !== "light" ? {transform : 'translateX(150px)'}:''  }
            />
        </div>
    )
}
