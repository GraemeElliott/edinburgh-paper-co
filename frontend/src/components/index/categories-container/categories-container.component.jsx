import React from 'react';

import CategoryTile from '../categories-tile/categories-tile.component';

import './categories-container.styles.scss'

class IndexCategories extends React.Component {
    constructor() {
        super();

        this.state = {
            productCategories: [
                {
                    title: 'archer and "olive"',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 1,
                    linkUrl: 'brands/archer-and-olive'
                },
                {
                    title: 'notebooks',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 2,
                    linkUrl: 'products/notebooks'
                },
                {
                    title: 'diaries and planners',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'products/diaries-planners'
                },
                {
                    title: 'pens and markers',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    linkUrl: 'products/pens-markers'
                },
                {
                    title: 'pens and markers',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 5,
                    size: 'large',
                    linkUrl: 'products/pens-markers'
                },
                {
                    title: 'sakura',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 6,
                    linkUrl: 'brands/sakura'
                }
            ]   
        }
    }

    render() {
        return (
            <div className='product-directory-menu'>
                {this.state.productCategories.map(({ id, ...otherSectionProps }) => (
                <CategoryTile key={id} {...otherSectionProps} />
            ))}
            </div>
        )
    }
};

export default IndexCategories;
