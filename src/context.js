import React, { Component } from "react";

import { formattedData } from "./data";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    isLoading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    isBreakfast: false,
    isPets: false,
  };


  componentDidMount() {
    let rooms = formattedData;
    let featuredRooms = formattedData.filter(
      (room) => room.featured === true
    );

    let maxPrice = Math.max(
      ...formattedData.map((item) => item.price)
    );
    let maxSize = Math.max(
      ...formattedData.map((item) => item.size)
    );

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      isLoading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  getRoomBySlug = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(
      (room) => room.slug === slug
    );
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value =
      target.type === "checkbox"
        ? target.checked
        : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      isBreakfast,
      isPets,
    } = this.state;

    let tempRooms = [...rooms];

    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(
        (room) => room.type === type
      );
    }

    // filter by capacity
    capacity = parseInt(capacity);
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(
        (room) => room.capacity >= capacity
      );
    }

    // filter by capacity
    price = parseInt(price);
    tempRooms = tempRooms.filter(
      (room) => room.price <= price
    );

    //filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    // filter by check
    if (isBreakfast) {
      tempRooms = tempRooms.filter(
        (room) => room.isBreakfast === true
      );
    }

    if (isPets) {
      tempRooms = tempRooms.filter(
        (room) => room.isPets === true
      );
    }

    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoomBySlug: this.getRoomBySlug,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => (
          <Component {...props} context={value} />
        )}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomContext, RoomConsumer };
