import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_KEY = "e78c45cbf644180f7ce5d36749398c91";

type Params = {
    movieId: string;
};
type MovieData = {
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string; // Gösterim tarihi için
    genres: Array<{ id: number, name: string }>; // Tür bilgisi için
    runtime: number; // Film süresi için
    credits: { cast: Array<{ name: string }>, crew: Array<{ job: string, name: string }> }; // Oyuncu ve ekip bilgisi için
};

function MovieDetail() {
    const [movie, setMovie] = useState<MovieData | null>(null);

    const { movieId } = useParams<Params>();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits`)
            .then(response => {
                setMovie(response.data);
            });
    }, [movieId]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-detail">
            <div className="movie-image">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <p><span className="label">Gösterim Tarihi:</span> {movie.release_date}</p>
                <p><span className="label">IMDb Puanı:</span> {movie.vote_average}</p>
            </div>
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <p><span className="label">Tür:</span> {movie.genres.map(genre => genre.name).join(', ')}</p>
                <p><span className="label">Süre:</span> {movie.runtime} dakika</p>
                <p><span className="label">Yönetmen:</span> {movie.credits.crew.find(crew => crew.job === 'Director')?.name}</p>
                <p><span className="label">Oyuncular:</span> {movie.credits.cast.slice(0, 5).map(cast => cast.name).join(', ')}</p>
                <p><span className="label">Özet:</span> {movie.overview}</p>
            </div>
            <div className="functionless-buttons">
                <button className="functionless-button">Giriş Yap</button>
                <button className="functionless-button">Paketleri İncele</button>
                <button className="functionless-button">Fragman İzle</button>
            </div>
        </div>
    );
    
    
    
    
}

export default MovieDetail;
