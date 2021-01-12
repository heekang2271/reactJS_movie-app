import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    state = {
        id: 0,
        title: "",
        year: "",
        summary: "",
        poster: "",
        genres: []
    }
    componentDidMount() {
        const {location, history} = this.props;
        const {state} = location;

        if (state === undefined) {
            history.push("/");
        } else {
            this.setState({
                id: state.id,
                title: state.title,
                year: state.year,
                summary: state.summary,
                poster: state.poster,
                genres: state.genres
            })
        }
    }
    render() {
        const {title, year, summary, poster, genres} = this.state;

        return (
            <div className="detail_container">
                <div className="detail">
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
                </div>
            </div>
        );
    }
}

export default Detail;