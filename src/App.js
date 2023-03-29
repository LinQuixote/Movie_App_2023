// import Proptypes from "prop-types";
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  // render 함수를 자동으로 실행한다
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie, index) => {
              return (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  rating={movie.rating}
                  year={movie.year}
                  poster={movie.medium_cover_image}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
