import React from "react";
import { useFechGifs } from "../hooks/useFechGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFechGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading ...</p>}
      <div className="card-grid animate__animated animate__bounce">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
