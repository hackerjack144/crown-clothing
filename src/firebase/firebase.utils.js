import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDfejTKu-vZHGYGoONnv0KKCOZjxUD_Zc4",
  authDomain: "crown-cloth-8d5d1.firebaseapp.com",
  databaseURL: "https://crown-cloth-8d5d1.firebaseio.com",
  projectId: "crown-cloth-8d5d1",
  storageBucket: "crown-cloth-8d5d1.appspot.com",
  messagingSenderId: "709935888755",
  appId: "1:709935888755:web:84e6e87825d329ab8ead06",
  measurementId: "G-6FV6PYW5NY"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// Code here for transfer hardcoded data to Firebase Database
// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);

//     const batch = firestore.batch();
//     objectsToAdd.forEach(obj => {
//       const newDocRef = collectionRef.doc();
//       batch.set(newDocRef, obj)}
//       );

//     return await console.log("The return of batch.commit()", batch.commit());

//  };

// Ends here

// This code written to get the data from firebase collection to our appliction

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// ends here

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
