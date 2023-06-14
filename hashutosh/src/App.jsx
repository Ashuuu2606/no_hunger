import { useState } from "react";
import "./App.css";
import { Text, Button } from "@chakra-ui/react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase_setup/firebase";

function App() {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <>
      <Text fontSize="6xl">In love with React & Next</Text>
      <Button onClick={googleSignIn}>SignIn</Button>
    </>
  );
}

export default App;