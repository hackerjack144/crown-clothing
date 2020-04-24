import ShopActionTypes from './shop.types';
//import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

// Promise Pattern Code example to, it is not in use anymore as we have write this code in Saga style
// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart());

//         collectionRef
//             .get()
//             .then(snapshot => {
//                 const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
//                 dispatch(fetchCollectionsSuccess(collectionsMap));
//           })
//             .catch(error => dispatch(fetchCollectionsFailure(error.message)));
//     };
// };