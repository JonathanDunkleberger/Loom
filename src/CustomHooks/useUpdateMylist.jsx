import React, { useContext, useState } from "react";
import { setDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";
import { AuthContext } from "../Context/UserContext";
import toast, { Toaster } from "react-hot-toast";

function useUpdateMylist() {
  const { User } = useContext(AuthContext);
  const [isMyListUpdates, setisMyListUpdates] = useState(false);

  function notify() {
    toast.success("  Movie added to MyList  ");
  }
  function alertError(message) {
    toast.error(message);
  }

  const addToMyList = async (movie) => {
    try {
      await setDoc(
        doc(db, "MyList", User.uid),
        { movies: arrayUnion(movie) },
        { merge: true }
      );
      console.log("Data added to MyList (setDoc merge)");
      notify();
      setisMyListUpdates(true);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      alertError(error.message);
    }
  };

  const removeFromMyList = async (movie) => {
    try {
      await setDoc(
        doc(db, "MyList", User.uid),
        { movies: arrayRemove(movie) },
        { merge: true }
      );
      toast.success(" Movie removed from MyList  ");
      setisMyListUpdates(true);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  const PopupMessage = (
    <Toaster
      toastOptions={{
        style: {
          padding: "1.5rem",
          backgroundColor: "#f4fff4",
          borderLeft: "6px solid lightgreen",
        },
      }}
    />
  );

  return { addToMyList, removeFromMyList, PopupMessage, isMyListUpdates };
}

export default useUpdateMylist;
