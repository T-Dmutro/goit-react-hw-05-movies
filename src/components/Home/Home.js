import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from "../ApiService/ApiService";
import { List, Item, Img, Title } from "../GlobalStyle/Pages.styled";

function HomePage() {
    const [moviesList, setMoviesList] = useState([]);
    const imgUrl = 'https://image.tmdb.org/t/p/w400';
    const notMovieImg = '🤔';
    useEffect(() => {
        getTrendingMovies().then((data) => {
            return setMoviesList(data.results)
        })
    }, [setMoviesList]);
    return (
        <main>
            <List>
            {moviesList && moviesList.map(movie => {
                return (
                    movie.title && (
                        <Item key={movie.id}>
                            <Link to={`/movies/${movie.id}`} state={'/'}>
                                <Img src={movie.poster_path? `${imgUrl}${movie.poster_path}`: notMovieImg} alt={movie.id} />
                                <Title>{movie.title}</Title>
                            </Link>
                        </Item>
                  )
                )
            })}
        </List>
        </main>
    )
};
export default HomePage;
