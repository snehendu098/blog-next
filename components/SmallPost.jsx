import React from "react";

const SmallPost = ({ data }) => {
  return (
    <div className="flex flex-col w-full mt-3 border-l-4 pl-2 border-blue-500 cursor-pointer hover:text-yellow-500">
      <p className="text-lg font-bold text-left truncate">
        This is a title text Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Fugit itaque magnam rem exercitationem quam voluptatibus, nulla
        ullam minus iure voluptatum quia eaque reiciendis maxime voluptates
        eligendi numquam aliquam labore eius.
      </p>
      <p className="text-sm truncate text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        laudantium voluptas voluptates ipsum! Odit totam itaque recusandae sequi
        earum repellendus quod, et fugit porro ex nam beatae quasi maxime eum.
      </p>
    </div>
  );
};

export default SmallPost;
