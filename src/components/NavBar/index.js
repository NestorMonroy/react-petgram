import React from "react";
import { Link, Nav } from "./styles";
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
const SIZE = "32px";

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>
        <HomeIcon size={SIZE} />
      </Link>
      <Link to='/favs'>
        <FavoriteBorderIcon size={SIZE} />
      </Link>
      <Link to='/user'>
        <PersonOutlineIcon size={SIZE} />
      </Link>
    </Nav>
  );
};
