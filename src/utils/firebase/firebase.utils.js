// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   signInWithRedirect,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk',
//   authDomain: 'crwn-clothing-db-98d4d.firebaseapp.com',
//   projectId: 'crwn-clothing-db-98d4d',
//   storageBucket: 'crwn-clothing-db-98d4d.appspot.com',
//   messagingSenderId: '626766232035',
//   appId: '1:626766232035:web:506621582dab103a4d08d6',
// };

// const firebaseApp = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: 'select_account',
// });

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   console.log(userAuth);
// };

// export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNmgJwqpG0VVu8wmdw7Y4_vlyADGiFvyM",
  authDomain: "crwn-clothing-db-1fd3e.firebaseapp.com",
  projectId: "crwn-clothing-db-1fd3e",
  storageBucket: "crwn-clothing-db-1fd3e.appspot.com",
  messagingSenderId: "531630611536",
  appId: "1:531630611536:web:12e232f6da752aa3c24555"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef,'userDocRef')
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot,'userSnapshot');

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error){
      console.error('error creating the user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}