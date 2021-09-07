import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

import Main from './Main'
const App = () => {
    
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
