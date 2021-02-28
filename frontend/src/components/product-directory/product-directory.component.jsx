import React from 'react';

import BrowseItem from '../product-directory-item/product-directory-item.component';

import './product-directory.styles.scss'

class ProductDirectory extends React.Component {
    constructor() {
        super();

        this.state = {
            productCategories: [
                {
                    title: 'notebooks',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'browse/notebooks'
                },
                {
                    title: 'diaries and planners',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'browse/diaries-planners'
                },
                {
                    title: 'pens and markers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 4,
                    linkUrl: 'browse/pens-markers'
                },
                {
                    title: 'pencils and erasers',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 5,
                    linkUrl: 'browse/pencils-erasers'
                },
                {
                    title: 'washi tape',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 3,
                    linkUrl: 'browse/washi-tape'
                },
                {
                    title: 'gifts and accessories',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 6,
                    linkUrl: 'browse/gifts-accessories'
                }
            ]   
        }
    }

    render() {
        return (
            <div className='product-directory-menu'>
                {this.state.productCategories.map(({ title, imageUrl, id, size }) => (
                <BrowseItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))}
            </div>
        )
    }
};

export default ProductDirectory;
