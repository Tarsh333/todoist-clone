import React, { useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useContext } from 'react'
import { AppContext } from './Context'

  
import Main from './Main'
const App = () => {
    const {tasks,projects}=useContext(AppContext)
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);
    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
      }, [projects]);
    return (
        <div>
            <Header/>
            <div className='container'>
            <Sidebar/>
            <Main/>
            </div>
        </div>
    )
}

export default App
