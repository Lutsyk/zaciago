import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBViLebuiWY1TB-lpX0v5Yn7ANlU68XLOI",
  authDomain: "zaciago.firebaseapp.com",
  projectId: "zaciago",
  storageBucket: "zaciago.appspot.com",
  messagingSenderId: "771593588422",
  appId: "1:771593588422:web:0338189cd0ba85075951c7",
  measurementId: "G-21PZ2EE9WK",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //DocRef for add update dell
  //SnapShotfor get
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
