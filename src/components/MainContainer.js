import React, { useState } from 'react';
import Navbar from './Navbar';
import ContactMe from './pages/ContactMe';
import ProjectsContainer from './pages/ProjectsContainer';
import Homepage from './pages/Homepage';

// In this file I am bringing in the appropriate components,
// they will be used to fetch the current page and new page 
// selected by the user. This helps us make sure that based
// of what the user has selected that we display the right page
// to them. 

export default function Main() {
    const [currentPage, setCurrentPage] = useState('Homepage');

    const renderPage = () => {
        if (currentPage === 'Homepage') {
            return <Homepage />;
        }
        if (currentPage === 'ProjectsContainer') {
            return <ProjectsContainer />;
        }
        if (currentPage === 'ContactMe') {
            return <ContactMe />;
        }
            return <Homepage />;
        };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        // We use return here to dictate the current page being used by the navBar and
        // to render the page that we will be showing to the user. 
        <div className='navBar' >
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}