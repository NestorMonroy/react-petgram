import React, { Fragment } from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";

export const Home = (path) => {
  //console.log("path > ", path);
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={path.id} />
    </Fragment>
  );
};
