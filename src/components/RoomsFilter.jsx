import React, { useContext } from "react";

import { RoomContext } from "../context";

import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    minSize,
    maxSize,
    isBreakfast,
    isPets,
  } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");

  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        {/*Select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* End Select type*/}

        {/*select Guest*/}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* End select Guest*/}

        {/*price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id={price}
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* End price*/}

        {/* Room size*/}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* End room size*/}

        {/* extras*/}
        <div className="form-group">
          <div className="single-extras">
            <input
              type="checkbox"
              name="isBreakfast"
              id="breakfast"
              checked={isBreakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extras">
            <input
              type="checkbox"
              name="isPets"
              id="pet"
              checked={isPets}
              onChange={handleChange}
            />
            <label htmlFor="pet">Pets</label>
          </div>
        </div>
        {/* end extras*/}
      </form>
    </section>
  );
};

export default RoomsFilter;
