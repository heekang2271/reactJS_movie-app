import React from 'react';
import axios from 'axios';
import Movie from '../component/Movie.js';
import './Home.css';


class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    componentDidMount() {
        const getMovies = async () => {
            const {
                data: {
                    data: {
                        movies
                    }
                }
            } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
            
            this.setState({
                isLoading: false,
                movies
            });
        }

        getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return (
            isLoading ? (
                <div className="loading">
                    Loading...
                </div>
            ) : (
                <div className="container">
                    {movies.map((movie, index) => {
                        return (
                            <Movie 
                                key={index}
                                id={movie.id}
                                title={movie.title}
                                year={movie.year}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres} 
                            />
                        )
                    })}
                </div>
            )
        );
    }
}

export default Home;