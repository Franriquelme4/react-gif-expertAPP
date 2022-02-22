
import React, { Fragment } from "react";
import '@testing-library/jest-dom'
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";
import PropTypes from 'prop-types';
export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  // se renombra

  return (
    <Fragment>
      {loading && (
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
GifGrid.propTypes={
  category:PropTypes.string.isRequired
}