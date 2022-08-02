import React from 'react'
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import phone from '../../assets/phone.jpg';

function Footer(props){
  return(

    <footer>
    <ul className="text-center d-inline">
            
    <li>
        <img src = {github} width="100" height="100"></img>
        <a href="https://github.com/AndrewKim123">GitHub</a>
    </li>
    
    <li>
      <img src = {linkedin} width="100" height="100"></img>
       <a href="https://www.linkedin.com/in/andrewsunhokim/"> LinkedIn</a>
    </li>

    <li>
      <img src = {phone} width="100" height="100"></img>
       <a href= "tel:(201)-673-0684">(201)-673-0684</a>
    </li>
    </ul>
    </footer>
  )
}
export default Footer;
