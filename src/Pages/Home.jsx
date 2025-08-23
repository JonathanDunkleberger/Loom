// src/pages/Home.jsx

import React from "react";
import { useEffect, useState, useContext } from "react";

// YOUR EXISTING COMPONENTS AND SERVICES
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import RowPost from "../components/RowPost/RowPost";
import {
  originals,
  trending,
  comedy,
  horror,
  Adventure,
  SciFi,
  Animated,
  War,
  trendingSeries,
  UpcomingMovies,
} from "../Constants/URLs";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";
import { AuthContext } from "../Context/UserContext";

// NEW SERVICE IMPORT FOR GAMES
import { fetchTopGames } from '../services/gameService';

function Home() {
  // YOUR EXISTING LOGIC - UNCHANGED
  const { User } = useContext(AuthContext);
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    if (User && User.uid) { // Good practice to ensure User exists before fetching
      getDoc(doc(db, "WatchedMovies", User.uid)).then((result) => {
        if (result.exists()) {
          const mv = result.data();
          setWatchedMovies(mv.movies);
        }
      });
    }
  }, [User]); // Add User to dependency array

  // NEW LOGIC FOR FETCHING GAMES
  const [topGames, setTopGames] = useState([]);

  useEffect(() => {
    // This effect fetches the game data when the component loads
    fetchTopGames()
      .then(games => {
        setTopGames(games);
        console.log("Fetched Top Games:", games); // Your first check
      })
      .catch(error => {
        console.error("Failed to fetch top games:", error);
      });
  }, []); // Empty array means this runs only once on mount

  return (
    <div>
      <Banner url={trending}></Banner>
      <div className="w-[99%] ml-1">
        <RowPost first title="Trending" url={trending} key={trending}></RowPost>
        <RowPost title="Animated" url={Animated} key={Animated}></RowPost>
        
        {/* YOUR EXISTING HISTORY ROW - UNCHANGED */}
        {watchedMovies.length !== 0 ? (
          <RowPost
            title="History"
            movieData={watchedMovies}
            key={"Watched Movies"}
          ></RowPost>
        ) : null}

        {/* NEW ROW FOR TOP RATED GAMES */}
        {/* We use the 'movieData' prop, just like your History row */}
        {topGames.length > 0 && (
          <RowPost
            title="Top Rated Games"
            islarge
            movieData={topGames}
            key={"Top Games"}
          />
        )}
        
        {/* YOUR OTHER EXISTING ROWS - UNCHANGED */}
        <RowPost
          title="Featured Titles"
          islarge
          url={originals}
          key={originals}
        ></RowPost>
        <RowPost
          title="Trending Series"
          url={trendingSeries}
          key={trendingSeries}
        ></RowPost>
        <RowPost title="Science Fiction" url={SciFi}></RowPost>
        <RowPost title="Upcoming Movies" url={UpcomingMovies}></RowPost>
        <RowPost title="Comedy" url={comedy}></RowPost>
        <RowPost title="Adventure" url={Adventure}></RowPost>
        <RowPost title="Horror" url={horror}></RowPost>
        <RowPost title="War" url={War}></RowPost>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;