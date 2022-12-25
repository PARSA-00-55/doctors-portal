import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // * observer
  const [user, setUser] = useState(null);
  // * error handleing .. page refreash error
  const [loading, setLoading] = useState(true);

  // TODO : Sign in with google function
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // TODO : user sign up function ..
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // TODO : user log in function ..
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // TODO : user information update function ..
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // TODO : user sign out function ..
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // TODO : Observer to observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observering");
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // TODO : importing everything from here
  const authInfo = {
    googleSignIn,
    createUser,
    signIn,
    logOut,
    updateUser,
    loading,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
