import React from 'react'
import Input from '../Components/Input'
import List from '../Components/List'

function Home() {
  return (
    <div className="main-home-container">
      <div className='todo-main-container m-5'>
        <div className='todo-container'>
        <Input/>         
        </div>
        <div className="list-todo">
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Home