import React from 'react'
import {FaGithub , FaLinkedin} from 'react-icons/fa'
function About() {
  return (
    <div className="main-container">
      <div className="main-about rounded">
        <div className="about-heading m-3">
          <h1 className='pl-2'>About</h1>
        </div>
      <div className="about-content m-3 p-4 rounded">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo assumenda quis ratione consequatur molestias veniam tenetur fugiat exercitationem necessitatibus, vel harum atque dicta. Quia suscipit culpa nam facere aspernatur pariatur recusandae distinctio, ullam fugiat earum assumenda commodi provident id illo. Perspiciatis nostrum earum rem voluptatem hic repudiandae nemo quam suscipit?
      </div>
      <div className='social-media'>
        <div className="accounts flex">
          <FaGithub className='mr-2' style={{fontSize:'30px',cursor:'pointer'}}/>
          <FaLinkedin className='ml-2' style={{fontSize:'30px',cursor:'pointer'}}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About