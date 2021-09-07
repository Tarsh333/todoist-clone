import React from 'react'
import Projects from './Projects'
import { FaInbox,FaCalendar,FaCalendarDay,FaCalendarAlt } from "react-icons/fa";
import { useContext } from 'react'
import { AppContext } from './Context'
const Sidebar = () => {
    const arr=['inbox','today','tomorrow','next week']
    const icons=[<FaInbox/>,<FaCalendar/>,<FaCalendarDay/>,<FaCalendarAlt/>]
    const {changeOpen}=useContext(AppContext)
    return (
        <div className='sidebar'>
            {arr.map((arr,index)=>{return(<div className='side-icons' key={index} onClick={()=>{changeOpen(arr)}}>{icons[index]} {arr}</div>)})}
            <div><Projects/></div>
        </div>
    )
}

export default Sidebar
