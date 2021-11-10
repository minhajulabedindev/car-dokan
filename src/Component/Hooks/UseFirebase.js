import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { initializeFireBaseAuthentiction } from "../Firebase/Firebase.init";

initializeFireBaseAuthentiction();
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);
  console.log(user);
  const auth = getAuth();

  ////
  const signWithGoogleIn = () => {
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   const member = result.member;
    //   setuser(member);
    //   console.log(user);
    // });
  };
  const signInEmailPassord = (email, password) => {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const LoginInEmailPassord = (email, password) => {
    console.log(email, password);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //----------sign out with google---------------------

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  //-------------------- useEffect part -------------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  return {
    signWithGoogleIn,
    setUser,
    user,
    signInEmailPassord,
    LoginInEmailPassord,
    isLoading,
    setIsLoading,
    logOut,
  };
};

export default UseFirebase;
