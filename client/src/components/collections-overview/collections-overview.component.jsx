import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect';

// import { selectCollections } from '../../redux/shop/shop.selectors';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import {CollectionOverviewContainer} from './collections-overview.styled';

const CollectionsOverview =({collections}) => (
    <CollectionOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
    </CollectionOverviewContainer>
);

const mapStatesToProps = createStructuredSelector({
    // collections: selectCollections
    collections:selectCollectionsForPreview
  });

export default connect(mapStatesToProps)(CollectionsOverview);