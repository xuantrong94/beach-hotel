import React from "react";
import {useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import defaultImg from "../assets/images/room-1.jpeg";

const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  const navigate = useNavigate();
  return (
    <article className="room">
      <div className="room__img__container">
        <img
          src={images[0] || defaultImg}
          alt="single room"
        />
        <div className="room__img__price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <button
          onClick={() => navigate(`/rooms/${slug}`)}
          className="btn-primary room__link"
        >
          Features
        </button>
      </div>
      <div className="room__info">{name}</div>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Room;
