import { useState, useEffect } from "react";
import "./App.css";
import { Text, Button } from "@chakra-ui/react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase_setup/firebase";
import { allDocuments } from "./firebase_setup/queries";
import { db } from "./firebase_setup/firebase";


function App() {

  const [res, setRes] = useState(null)

  useEffect(() => {
    if(res){
console.log(res.docs);
  }

  }, [res])

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);    
  };

  const printDocs = async () => {
    setRes(await allDocuments("food"))
  }
  return (
    <>
      <Text fontSize="6xl">In love with React & Next</Text>
      <Button onClick={printDocs}>SignIn</Button>
      <Button onClick={null}>Help</Button>
    </>
  );
}

export default App;