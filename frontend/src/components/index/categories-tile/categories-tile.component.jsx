import React from 'react';

import './product-directory-item.styles.scss';

const CategoryTile = ({ title, imageUrl, size }) => (
  <div className={`${size} browse-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
    </div>
  </div>
);

export default CategoryTile;