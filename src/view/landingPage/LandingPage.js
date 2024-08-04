import React, { useState } from 'react';
import Table from './table.js'; 
import NewProject from './newproject.js'; 

function LandingPage() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  
    return (
        <div>
            <Table openModal={openModal} />
            <NewProject modalOpen={modalOpen} closeModal={closeModal} />
        </div>
    );
}

export default LandingPage;
