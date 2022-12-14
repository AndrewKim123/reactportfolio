import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import '../../index.css'


function Nav(props) {
    const {
      pages = [],
      setCurrentPage,
      currentPage,
    } = props;
  
    useEffect(() => {
      document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);
  
    return (    
        <nav className = 'navBar'>
          <ul className="navUL">
            {pages.map((Page) => (
              <li
                className={`mx-5 ${
                  currentPage.name === Page.name && 'navActive'
                  }`}
                key={Page.name}
              >
                <span
                  onClick={() => setCurrentPage(Page)}
                >
                  {capitalizeFirstLetter(Page.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
    );
  }
  
  export default Nav;
  

