import React, { Component } from "react";


import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRoom extends Component {
  static contextType = RoomContext;

  render() {
    let { isLoading, featuredRooms } = this.context;

    const rooms = featuredRooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured room" />
        <div className="featured-rooms--center">
          {isLoading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
