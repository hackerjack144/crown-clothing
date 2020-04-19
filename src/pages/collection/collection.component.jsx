import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';


import CollectionItems from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    const{title, items } = collection;
    return(
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => <CollectionItems key={item.id} item={item}/>)
            }
        </div>
    </div>
);}

// This is necessary becasue unlike other selectors, this selector need a part of state depending on the URL Parameters
const mapStatesToProps =(state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
  
export default connect(mapStatesToProps)(CollectionPage);