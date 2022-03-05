import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyD5WTMb6NOfxRK2w6C3eveYNYN_nSy5F28",
    authDomain: "nomad-bags-store-17894.firebaseapp.com",
    projectId: "nomad-bags-store-17894",
    storageBucket: "nomad-bags-store-17894.appspot.com",
    messagingSenderId: "303792360225",
    appId: "1:303792360225:web:01b5fd31fd015604058c60"
  };

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) { return };

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

export {
    firestore,
    createUserProfileDocument,
    auth,
}