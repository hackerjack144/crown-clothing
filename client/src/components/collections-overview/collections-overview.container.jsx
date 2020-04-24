import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
  });

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

// line 14 can be write without Compose as mentioned in here:
// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;