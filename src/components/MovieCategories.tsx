import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = "e78c45cbf644180f7ce5d36749398c91";

// Tür tanımlamaları
type Genre = {
    id: number;
    name: string;
};

type Movie = {
    id: number;
    title: string;
    poster_path: string;
    overview: string; //özet bilgisi
    vote_average: number; //ımdb puanı
};

function MovieCategories() {
    const [categories, setCategories] = useState<Genre[]>([]); // Categories için tür belirtimi
    const [moviesByCategory, setMoviesByCategory] = useState<Record<number, Movie[]>>({}); // Movies için tür belirtimi

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                setCategories(response.data.genres);
                response.data.genres.forEach((category: Genre) => {
                    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${category.id}&page=1`)
                        .then(response => {
                            setMoviesByCategory(prevState => ({
                                ...prevState,
                                [category.id]: response.data.results.slice(0,)
                            }));
                        });
                });
            });
    }, []);

    return (
        <div className="movieCategoryContainer">
            {categories.map(category => (
                <div key={category.id}>
                    <h2>{category.name}</h2>
                    <div className="movieList">
                        {moviesByCategory[category.id]?.map(movie => (
                            <div key={movie.id}>
                                <Link to={`/movie/${movie.id}`}>

                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                                    <p>{movie.title}</p>
                                    <div className="movieInfo">
                                        <p>{movie.overview}</p>
                                        <p>{movie.vote_average}</p>
                                    </div>
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

}

export default MovieCategories;
