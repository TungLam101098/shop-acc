import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBev9ga4YIE5HB9fGrZj9xtccuZPaHn4hk",
  authDomain: "shop-acc-4d686.firebaseapp.com",
  projectId: "shop-acc-4d686",
  storageBucket: "shop-acc-4d686.appspot.com",
  messagingSenderId: "429006676279",
  appId: "1:429006676279:web:94561620c230c51caa7ab2",
  measurementId: "G-5MNECSMYMP"
};

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
        email,createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
