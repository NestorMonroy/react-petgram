import React from "react";
import { Layout } from "../components/Layouts";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";

export const Home = ({ categoryId }) => {
  //console.log("path > ", path);
  return (
    <Layout
      title="Tu app de fotos de mascotas"
      subtitle="Con petgram puedes encontrar fotos de animales
        domesticos muy bonitos"
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  );
};
