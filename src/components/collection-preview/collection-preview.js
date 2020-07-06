import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item'

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'> {title.toUpperCase()} </h1>
        <div className='preview'>
            {
                items
                .filter((item, index) => index < 4) //solo muestra 4
                .map(({ id, name, imageUrl, price }) => (
                    <CollectionItem key={id} name={name} imageUrl={imageUrl} price={price} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;