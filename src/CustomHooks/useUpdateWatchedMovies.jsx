import React, { useContext, useState } from "react";
import { setDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";
import { AuthContext } from "../Context/UserContext";
import toast, { Toaster } from "react-hot-toast";

function useUpdateWatchedMovies() {
  const { User } = useContext(AuthContext);
  const [Error, setError] = useState(false);

  function notify() {
    toast.success("  Movie removed from Watched List  ");
  }
  function alertError(message) {
    toast.error(message);
  }
  const addToWatchedMovies = async (movie) => {
    try {
      await setDoc(
        doc(db, "WatchedMovies", User.uid),
        { movies: arrayUnion(movie) },
        { merge: true }
      );
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      alertError(error.message);
      setError(true);
    }
  };

  const removeFromWatchedMovies = async (movie) => {
    try {
      await setDoc(
        doc(db, "WatchedMovies", User.uid),
        { movies: arrayRemove(movie) },
        { merge: true }
      );
      notify();
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      alertError(error.message);
      setError(true);
    }
  };

  const removePopupMessage = (
    <Toaster
      toastOptions={{
        style: {
          padding: "1.5rem",
          backgroundColor: Error ? "#fff4f4" : "#f4fff4",
          borderLeft: Error ? "6px solid red" : "6px solid lightgreen",
        },
      }}
    />
  );

  return { addToWatchedMovies, removeFromWatchedMovies, removePopupMessage };
}

export default useUpdateWatchedMovies;
