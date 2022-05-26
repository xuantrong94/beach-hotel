import React from "react";

import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";

import { withRoomConsumer } from "../context";

function RoomsContainer({ context }) {
  const { isLoading, sortedRooms, rooms } = context;
  if (isLoading) return <Loading />;
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}
// const RoomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { isLoading, sortedRooms, rooms } = value;
//         if (isLoading) return <Loading />;
//         return (
//           <div>
//             From RoomsContainer
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

export default withRoomConsumer(RoomsContainer);
