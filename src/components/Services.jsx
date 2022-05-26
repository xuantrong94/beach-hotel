import React, { Component } from "react";

import {
  FaBeer,
  FaHiking,
  FaCocktail,
  FaShuttleVan,
} from "react-icons/fa";

import Title from "./Title";

const state = [
  {
    icon: <FaCocktail />,
    title: "Free Cocktail",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, exercitationem?",
  },
  {
    icon: <FaHiking />,
    title: "Endless Hiking",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, exercitationem?",
  },
  {
    icon: <FaShuttleVan />,
    title: "Free Shuttle",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, exercitationem?",
  },
  {
    icon: <FaBeer />,
    title: "Strongest Beer",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, exercitationem?",
  },
];

export default class Services extends Component {
  
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services--center">
          {state.map((item, index) => (
            <article key={index} className="services__item">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
