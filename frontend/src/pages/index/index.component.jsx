import React from 'react';
import './index.styles.scss';

import Header from '../../components/partials/header/header.component';
import IndexCategories from '../../components/index/categories-container/categories-container.component';

const Index = () => {
    return (
        <div className='main'>
            <Header />
            <IndexCategories />
            <div>

                <h1 className='title'> Homepage </h1>

            </div>

        </div>
    );
};

export default Index;