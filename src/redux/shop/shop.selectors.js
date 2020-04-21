import { createSelector } from 'reselect';

// this line of code define to give proper ID, which helps to identify what page we are in

    // const COLLECTION_ID_MAP = {
    //     hats:1,
    //     sneakers:2,
    //     jackets:3,
    //     womens:4,
    //     mens:5
    // };

// ends here, and export 'selectCollection' for the same key and code

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
);

// this below function is written because collection.coponent is still thinks that data comes from array but data comes from an object of Hash TAble Object,
// so, we aritten this

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

// Code ends here

// this function is used to get the record form Array.
    // export const selectCollection = collectionUrlParam =>
    //     createSelector(
    //         [selectCollections],
    //         collections => collections.find(
    //             collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    //             )
    //     );

// This function is used to get the data form Hash Table, we have make changes from [] to {} in SHOP.data.js for this
// in this case we wo not need 'COLLECTION_ID_MAP', that is also commented above
export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
    );

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);