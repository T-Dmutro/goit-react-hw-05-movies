import { Nav, Link } from "./Navigation.styled";
import { Toaster } from 'react-hot-toast';

function Navigation() {
    return (
        <header>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </Nav>
            <Toaster />
        </header>

 )
}

export default Navigation;
