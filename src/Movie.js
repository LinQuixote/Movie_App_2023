import React from "react";
import Proptypes from "prop-types";
import "./Movie.css";

// 내부에 동적 변수인 state가 필요 없으면 class를 사용할 필요가 없고, 일반 함수로 충분하다
const Movie = ({ rating, title, summary, poster, year, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title}></img>
      <div className="movie__data">
        <h4 className="movie__title">{title}</h4>
        {/* <h4 className="movie__rating">{rating}</h4> */}
        <h4 className="movie__year">{year}</h4>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  rating: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  // poster: Proptypes.string.isRequired,
  year: Proptypes.number.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default Movie;
