import React from 'react'
import backgroundimg from '../../assets/backgroundimg.jpg';
import Nav from '../Nav/index'

function Header(props) {
return (
    <header className='flex-row space-between ' style = {{display: 'flex', justifyContent: 'space-between' }}>
        <div>
            <h1>Andrew Kim</h1> 
            <h3>Full Stack Developer</h3>
        </div>
       <img src = {backgroundimg}></img>
       {props.children}
    
    </header>
)
}
export default Header;
