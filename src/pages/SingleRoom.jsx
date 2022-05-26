import React from "react";
import { Link, useParams } from "react-router-dom";

import { getSingleRoom } from "../data";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

const SingleRoom = () => {
  let params = useParams();
  let singleRoom = getSingleRoom(params.slug);
  if (!singleRoom) {
    return (
      <div className="error">
        <h3>no such room could be found</h3>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = singleRoom;

  const [mainImg, ...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg || defaultImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room__images">
          {defaultImg.map((item, index) => {
            return (
              <img key={index} src={item} alt={name} />
            );
          })}
        </div>
        <div className="single-room__details">
          <article className="single-room__details__desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="single-room__details__info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: ${size}</h6>
            <h6>
              max capacity:{" "}
              {capacity > 1
                ? `${capacity} people`
                : `${capacity} person`}
            </h6>
            <h6>
              {pets ? "pets allowed" : "no pet allowed"}
            </h6>
            <h6>
              {breakfast && "free breakfast included"}
            </h6>
          </article>
          <article className="single-room__details__extras">
            <ul className="single-room__details__extras__container">
              {extras.map((item, index) => {
                return <li key={index}>- {item}</li>;
              })}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default SingleRoom;
