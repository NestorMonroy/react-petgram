import React from "react";
import { Layout } from "../components/Layouts";
import { FavsWithQuery } from "../container/GetFavorites";

export const Favs = () => (
  <Layout title="Tus favoritos" subtitle="aqui puedes enconrar tus favorios">
    <FavsWithQuery />
  </Layout>
);
