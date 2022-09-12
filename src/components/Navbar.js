import React from 'react';

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