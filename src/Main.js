import React, { useEffect, useState } from 'react'
import { uuid } from 'uuidv4';
import { useContext } from 'react'
import { AppContext } from './Context'
const Main = () => {
    const { opened, projects, addTask, tasks,removeTask } = useContext(AppContext)
    const [input, setInput] = useState('')
    const [optionProject, setOptionProject] = useState(projects[0])
    const [optionTime, setOptionTime] = useState('today')
    const [open, setOpen] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault()
        addTask({ time: optionTime, project: optionProject, title: input,id:uuid() })
        setInput('')
        setOpen(false)
    }
    useEffect(() => {
       if(projects.includes(opened)){
           setOptionProject(opened)
       }else if(opened!=='inbox'){
           setOptionTime(opened)
       }
    }, [opened])
    return (
        <div className='main'>
            <h2>{opened}</h2>      
            {
                opened === 'inbox' ? tasks.map((task) => { return (<div className="task-list"> <button className="task-completed" onClick={()=>{removeTask(task.id)}}></button> {task.title} </div>) }) :
                    projects.includes(opened) ? tasks.map((task) => {
                        // console.log(opened, task.project)
                        if (task.project === opened) {
                            return(
                                <div className="task-list"><button className="task-completed" onClick={()=>{removeTask(task.id)}}></button>{task.title}</div>
                            )
                        }
                    }) : tasks.map((task) => {
                        // console.log(opened, task.project)
                        if (task.time === opened) {
                            return(
                                <div className="task-list"><button className="task-completed" onClick={()=>{removeTask(task.id)}}></button>{task.title}</div>
                            )
                        }
                    })
            }
            <button onClick={()=>{setOpen(true)}} className="add-something add-task">Add Task</button>
            {open&&<form className="form-add-task" onSubmit={submitHandler}>
                <input type="text" placeholder="add event" value={input} onChange={(e) => { setInput(e.target.value) }} required />
                <div className="btns-and-select">
                <div>
                <button type="submit"className='submit'>Submit</button>
                <button onClick={()=>{setOpen(false)}} className="cancel">Cancel</button>
                </div>
                <div>    
                <select title="Select Project" value={optionProject} onChange={(e) => { setOptionProject(e.target.value) }}>
                    {projects.map((project) => { return (<option key={project} value={project}>{project}</option>) })}
                </select>
                <select onChange={(e) => { setOptionTime(e.target.value) }} title="Select Deadline" value={optionTime}>
                    <option value="today">today</option>
                    <option value="tomorrow">tomorrow</option>
                    <option value="next week">next week</option>
                </select>
                </div>

                </div>
            </form>}
        </div>
    )
}

export default Main
