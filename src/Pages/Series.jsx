import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import RowPost from "../components/RowPost/RowPost";
import {
  originals,
  comedy,
  horror,
  Adventure,
  SciFi,
  Animated,
  War,
  trendingSeries,
  UpcomingMovies,
} from "../Constants/URLs";

function Series() {
  return (
    <div>
      <Banner url={trendingSeries}></Banner>
      <div className="w-[99%] ml-1">
        <RowPost
          first
          title="Trending Series"
          url={trendingSeries}
          key={trendingSeries}
        ></RowPost>
        <RowPost title="Animated" url={Animated} key={Animated}></RowPost>
        <RowPost
          title="Featured Titles"
          islarge
          url={originals}
          key={originals}
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

export default Series;
