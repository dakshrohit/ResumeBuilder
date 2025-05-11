import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='head-left'>
        <p className='content-right'>RESUME BUILDER</p>

      </div>
      <div className='head-right'>
        <ul>
            <li>Examples</li>
            <li>Templates</li>
            <li>Covers</li>
            <li><button className='signinbtn'>
                Sign in</button></li>
        </ul>
      

      </div>
    </div>
  )
}

export default Header


