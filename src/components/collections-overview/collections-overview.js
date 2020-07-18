import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';


import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
                {
            collections.map(({ id, title, items }) => (
                <CollectionPreview key={id} title={title} items={items} />
            ))
        }

    </div>
)

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)