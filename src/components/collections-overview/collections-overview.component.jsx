import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect';

// import { selectCollections } from '../../redux/shop/shop.selectors';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview =({collections}) => (
    <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
    </div>
);

const mapStatesToProps = createStructuredSelector({
    // collections: selectCollections
    collections:selectCollectionsForPreview
  });

export default connect(mapStatesToProps)(CollectionsOverview);