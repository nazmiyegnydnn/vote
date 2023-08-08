import React from 'react'
import './Main.scss'


const Main = () => {




  return (
    <div className='main'>
    <div className='todo-title'> 
    <h2>Add New Link</h2>
    </div>
    <div className='todo-link'>
      <div className='link-name'>
        <p>Link Name</p>
        <input placeholder='Stack Overflow'/>
      </div>
      <div className='link-url'>
        <p>Link URL</p>
        <input placeholder='https://stackoverflow.com'/>
      </div>
    </div>
    <div className='todo-button'>
       <button>ADD</button>
    </div>
    </div>
  )
}

export default Main