import React, { Fragment } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loanding } = useFetchGifs(category);

  // se renombra

  return (
    <Fragment>
      {loanding && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      <div className="img-container">
        {images.map((image) => (
          <GiftGridItem key={image.id} {...image} />
        ))}
      </div>
    </Fragment>
  );
};
