import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changeTheme } from '../redux/reducer/themeReducer';

export default function BT3() {
    const theme= useSelector((state:any)=>state.theme)
    const dispatch=useDispatch();
  return (
    <div style={{backgroundColor:`${theme}`,height:'100px',width:'100px'}} >
        <button onClick={()=>dispatch(changeTheme())}>{theme==='white'? 'light':'dark'}</button>
    </div>
  )
}
