import React from "react";
import { useEffect, useState } from "react";
import axios from "../../axios";
import { imageUrl, imageUrl2, API_KEY } from "../../Constants/Constants";
import useUpdateMylist from "../../CustomHooks/useUpdateMylist";
import StarRatings from "react-star-ratings";
import usePlayMovie from "../../CustomHooks/usePlayMovie";
import useUpdateWatchedMovies from "../../CustomHooks/useUpdateWatchedMovies";
import useUpdateLikedMovies from "../../CustomHooks/useUpdateLikedMovies";
import useGenereConverter from "../../CustomHooks/useGenereConverter";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// CORRECTED IMPORT PATH
import MoviePopUp from "../popup/MoviePopUp"; 

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./RowPostStyles.scss";

function RowPost(props) {
  const { addToMyList, PopupMessage } = useUpdateMylist();
  const { playMovie } = usePlayMovie();
  const { removeFromWatchedMovies, removePopupMessage } = useUpdateWatchedMovies();
  const { addToLikedMovies, LikedMoviePopupMessage } = useUpdateLikedMovies();
  const { convertGenere } = useGenereConverter();

  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [moviePopupInfo, setMoviePopupInfo] = useState({});
  const [shouldPop, setshouldPop] = useState(true);

  useEffect(() => {
    if (props.movieData != null) {
      setMovies(props.movieData);
    } else {
      axios.get(props.url).then((response) => {
        setMovies(response.data.results);
      });
    }
  }, [props.movieData, props.url]);

  const customSettings = {
    breakpoints: {
      1800: { slidesPerView: 6.1, slidesPerGroup: 5 },
      1690: { slidesPerView: 5.5, slidesPerGroup: 5 },
      1536: { slidesPerView: 5, slidesPerGroup: 5 },
      1280: { slidesPerView: 4.3, slidesPerGroup: 4 },
      768: { slidesPerView: 3.3, slidesPerGroup: 3 },
      625: { slidesPerView: 3.1, slidesPerGroup: 3 },
      330: { slidesPerView: 2.1, slidesPerGroup: 2 },
      0: { slidesPerView: 2, slidesPerGroup: 2 },
    },
  };
  
  const handleMoviePopup = (movieInfo) => {
    if (movieInfo.type === 'game') {
      console.log("Game item clicked (pop-up disabled for now):", movieInfo);
      return;
    }
    
    if (shouldPop) {
      setMoviePopupInfo(movieInfo);
      setShowModal(true);
    }
  };

  return (
    <div
      className="ml-2 lg:ml-11 mb-11 lg:mb-4 RowContainer"
      style={{ marginTop: `${props.first ? "-8rem" : ""}` }}
    >
      {PopupMessage}
      {removePopupMessage}

      {movies && movies.length > 0 ? (
        <>
          <h1 className="text-white pb-4 xl:pb-0 font-normal text-base sm:text-2xl md:text-4xl">
            {props.title}
          </h1>

          <Swiper
            {...customSettings}
            modules={[Navigation, Pagination]}
            spaceBetween={8}
            navigation
            pagination={{ clickable: true }}
            className="SwiperStyle"
          >
            {movies.map((obj, index) => {
              const itemImage = props.islarge
                ? obj.posterUrl || `${imageUrl}${obj.poster_path}`
                : obj.backdropUrl || `${imageUrl2}${obj.backdrop_path}`;
              
              const itemTitle = obj.title || obj.name;
              const itemGenres = obj.genres || obj.genre_ids;
              const converted = convertGenere(itemGenres);

              return (
                <SwiperSlide
                  key={obj.id || index}
                  className={props.islarge ? "large" : "bg-cover"}
                  onClick={() => handleMoviePopup(obj)}
                >
                  <img
                    loading="lazy"
                    className="rounded-sm"
                    src={itemImage || "https://i.ytimg.com/vi/Mwf--eGs05U/maxresdefault.jpg"}
                    alt={itemTitle}
                  />
                  <div className="content pt-16">
                    <div className="flex transition ml-3 ease-in-out delay-150">
                    </div>
                    <h1 className="text-white ml-4 font-medium w-4/5 xl:line-clamp-1">
                      {itemTitle}
                    </h1>
                    <h1 className="text-white text-xs font-semibold ml-4 w-11/12">
                      {obj.releaseDate || obj.release_date || obj.first_air_date}
                    </h1>
                    <div className="ml-4">
                      <StarRatings
                        rating={obj.rating ? obj.rating / 2 : obj.vote_average / 2}
                        starRatedColor="#00A8E1"
                        numberOfStars={5}
                        name="rating"
                        starDimension="0.8rem"
                        starSpacing="0.2rem"
                      />
                    </div>
                    {converted &&
                      converted.map((genre) => (
                        <span key={genre} className="hidden text-white ml-4 font-thin text-xs lg:inline">
                          {genre}
                        </span>
                      ))}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      ) : (
        <div className="animate-pulse">
        </div>
      )}

      {showModal && <MoviePopUp data1={moviePopupInfo} from={props.from} />}

    </div>
  );
}

export default RowPost;