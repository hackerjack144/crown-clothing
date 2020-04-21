// Comment this code as we are using redux-thunk that needed more types to get proceed
// const ShopActionTypes = {
//     UPDATE_COLLECTION: 'UPDATE_COLLECTION'
// }

const ShopActionTypes = {
    FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
    FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
    FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE'
}

export default ShopActionTypes;