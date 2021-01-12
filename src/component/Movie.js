import React from "react";
import Proptypes from 'prop-types'
import {Link} from 'react-router-dom';

function Movie({id, title, year, summary, poster, genres}) {
    return (
        <Link className="movie" to={{
            pathname: `/detail/${id}`,
            state: {
                id,
                title,
                year,
                summary,
                poster,
                genres
            }
        }}>
            <div>
                <img src={poster} alt={title}/>
            </div>
            <div className="movie_info">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((genre, index) => {
                        return (
                            <li key={index}>{genre}</li>
                        );
                    })}
                </ul>
                <div className="movie_summary">
                    {summary}
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    year: Proptypes.number.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
}

export default Movie;