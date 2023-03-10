import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBD4AL4SehcfrmV-LhiC1SMGu6okcSxrOk',
  authDomain: 'crwn-clothing-db-f6638.firebaseapp.com',
  projectId: 'crwn-clothing-db-f6638',
  storageBucket: 'crwn-clothing-db-f6638.appspot.com',
  messagingSenderId: '736671253646',
  appId: '1:736671253646:web:eccd0140639a97ba2835df',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGoglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userAuth);
  // firestore의 저장위치
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  // user data 있으면(=true)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createAt });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};
