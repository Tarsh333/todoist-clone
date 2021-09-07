import React, { useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
const Header = () => {
    const [darkMode, setDarkMode] = useState(false)
    const styleLight={backgroundColor:'#DB4C3F'}
    const styleDark={backgroundColor:'black'}
    return (
        <div className='header' style={darkMode?styleDark:styleLight}>
            <div>
            Todoist
            </div>
            <FaPizzaSlice className='pizza-icon' onClick={()=>{setDarkMode(prev=>!prev)}}/>
        </div>
    )
}

export default Header
