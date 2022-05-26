import React from "react";

import Room from "./Room";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>no rooms match</h3>
      </div>
    );
  }
  return (
    <section className="rooms-list">
      <div className="rooms-list--center">
        {rooms.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
