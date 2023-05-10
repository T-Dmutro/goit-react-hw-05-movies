import Home from "components/Home/Home";
import Movies from "components/Movies/Movies";
import React from "react";
import { Link} from 'react-router-dom';
function Header ( ) {
  return (
    <div>

    <Link to={'/'}  >Home</Link >
    <Link to={'/Movies'} >Movies</Link >

    </div>
  )
}


export default Header;
