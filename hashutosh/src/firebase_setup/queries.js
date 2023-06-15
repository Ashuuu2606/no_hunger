import {
    collection,
    query,
    where,
    getDocs,
    updateDoc,
    doc,
    setDoc,
  } from "firebase/firestore";
  import { db } from "./firebase";
  
  export const allDocuments = (collectionName) => {
    return getDocs(collection(db, collectionName));
  };
  
  export const allDocumentsWithLimit = (
    collectionName
    // order_by_field: string,
    // limit_number: number
  ) => {
    return getDocs(collection(db, collectionName));
  };
  
  export const specificDocumentsUsingWhere = (
    collectionName,
    docKey,
    docValue
  ) => {
    let x;
    try {
      x = getDocs(
        query(collection(db, collectionName), where(docKey, "==", docValue))
      );
    } catch (e) {
      console.log(e);
    }
    return x;
  };
  
  export const specificDocumentsUsingWhereNumber = (
    collectionName,
    docKey,
    docValue
  ) => {
    let x;
    try {
      x = getDocs(
        query(collection(db, collectionName), where(docKey, "==", docValue))
      );
    } catch (e) {
      console.log(e);
    }
    return x;
  };
  export const specificDocumentsUsingWhereBoolean = (
    collectionName,
    docKey,
    docValue
  ) => {
    let x;
    try {
      x = getDocs(
        query(collection(db, collectionName), where(docKey, "==", docValue))
      );
    } catch (e) {
      console.log(e);
    }
    return x;
  };
  
  export const specificDocumentsUsingIn = (
    collectionName,
    docKey,
    docValueArray
  ) => {
    return getDocs(
      query(collection(db, collectionName), where(docKey, "in", docValueArray))
    );
  };
  
  export const updateDocumentData = (updateObj, collectionName, field_name) => {
    return updateDoc(doc(db, collectionName, field_name), {
      ...updateObj,
    });
  };
  
  export const setNewDocument = (collectionName, doc_id, doc_object) => {
    return setDoc(doc(db, collectionName, `${doc_id}`), {
      ...doc_object,
    });
  };
  
  export const setFirebaseAccount = (authId, userAuth, setUser) => {
    specificDocumentsUsingWhere("users", "userId", authId).then((snapshot) => {
      if (snapshot.empty) {
        const { displayName, email } = userAuth;
        const user = {
          email: email,
          username: displayName,
          userId: userAuth.uid,
          wallet_address: "",
          dateOfJoining: Date.now(),
          activeTime: Date.now(),
          isBot: "",
        };
        setDoc(doc(db, "users", userAuth.uid), user).then(() => {
          setUser(user);
        });
      } else {
        snapshot.forEach((doc) => setUser(doc.data()));
      }
    });
  };
  