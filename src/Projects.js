import React, { useState } from 'react'
import { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'
import { AppContext } from './Context'
const Projects = () => {
    const {projects,changeOpen,addProject,deleteProject}=useContext(AppContext)
    const [open, setOpen] = useState(true)
    const [input, setInput] = useState('')
    const [openAddProject, setOpenAddProject] = useState(false)
    const submitHandler=(e)=>{
        e.preventDefault()
        addProject(input)
        setInput('')
        setOpenAddProject(false)
    }
    return (
        <div>
            <button className='projects-heading' onClick={()=>{setOpen(prev=>!prev)}}>Projects  {open?'˅':'>'} </button>
            {open&&projects.map((proj)=>{return(<div className='side-icon'><button onClick={()=>{changeOpen(proj)}}>{proj}</button><FaTrash color="red" onClick={()=>{deleteProject(proj)}} className='trash-icon' /></div>)})}
           {!openAddProject&&<button onClick={()=>setOpenAddProject(true)} className="add-project-btn side-icon add-something"> Add Project</button>} 
            {openAddProject&&<><form onSubmit={submitHandler}><input type="text" placeholder="Project Title" value={input} onChange={(e) => { setInput(e.target.value) }} required/><br/><button className='submit'>Add Project</button><button onClick={()=>{setOpenAddProject(false)}} className="cancel" >Cancel</button></form>
            </>}
            
        </div>
    )
}

export default Projects
