import React from 'react'
import backgroundimg from '../../assets/backgroundimg.jpg';

function Header(props) {
return (
    <header className='flex-row space-between '>
       <h1>Andrew Kim</h1> 
       <h3>Full Stack Developer</h3>
       <img src = {backgroundimg}></img>
       {props.children}
    </header>
)
}
export default Header;
