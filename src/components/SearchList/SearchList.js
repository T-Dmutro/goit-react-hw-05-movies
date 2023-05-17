import { Link, useLocation } from 'react-router-dom';
import { List, Item, Img, Title } from "../GlobalStyle/Pages.styled";
import Logo from '../../logo.png'

const SearchList = ({ movies }) => {
    const location = useLocation();
    const imgUrl = 'https://image.tmdb.org/t/p/w400';
    const notMovieImg = Logo;

    return (
        <List>
            {movies &&
                movies.map(movie => {
                    return (
                        <Item key={movie.id}>
                            <Link
                                to={`${movie.id}`}
                                state={`${location.pathname}${location.search}`}>
                                <Img src={movie.poster_path? `${imgUrl}${movie.poster_path}`: notMovieImg} alt={movie.id} />
                                <Title>{movie.title}</Title>
                            </Link>
                        </Item>
                    );
                })}
        </List>
    )
};

export default SearchList;
