import React, { useState } from 'react';
import Navbar from './Navbar';
import ContactMe from './pages/ContactMe';
import ProjectsContainer from './pages/ProjectsContainer';
import Homepage from './pages/Homepage';

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
        <div className='navBar' >
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}