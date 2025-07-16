// src/firebase/auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut } from "firebase/auth";
import app from './config';

const auth = getAuth(app);

// Email registration
export const registerWithEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Email sign-in
export const signInWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Google sign-in
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider);

// Facebook sign-in
const facebookProvider = new FacebookAuthProvider();
export const signInWithFacebook = () =>
  signInWithPopup(auth, facebookProvider);

// Logout
export const logout = () => signOut(auth);
