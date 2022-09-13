import React from 'react';

// This Navbar component is used as the main navigation
// on our react app. What we are doing here is listening
// for user interaction and then based off that interaction
// modifying the current "active" state of the navbar. This works
// alongside the MainContainer.js file

function Navbar({ currentPage, handlePageChange}) {
    return (
        <ul className='nav nav-tabs'>
        <li className='nav-item'>
            <a href='#home'
            onClick={() => handlePageChange('Homepage')}
            className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
            >Homepage</a>
        </li>
        <li className='nav-item'>
            <a href='#projects'
            onClick={() => handlePageChange('ProjectsContainer')}
            className={currentPage === 'ProjectsContainer' ? 'nav-link active' : 'nav-link'}
            >Projects</a>
        </li>
        <li className='nav-item'>
            <a href='#contact'
            onClick={() => handlePageChange('ContactMe')}
            className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
            >Contact Me</a>
        </li>
    </ul>
    );
}

export default Navbar;