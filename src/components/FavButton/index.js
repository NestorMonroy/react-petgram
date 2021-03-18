import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { Button } from "./styles";

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? FavoriteIcon : FavoriteBorderIcon;
  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  );
};
