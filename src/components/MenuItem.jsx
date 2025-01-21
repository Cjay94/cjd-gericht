import React from 'react';



const MenuItem = ({ title, price, tags }) => (
  <div className="w-full my-4 mx-0 flex flex-col">
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <p className="p__cormorant !text-cgolden">{title}</p>
      </div>

      <div className="flex justify-end items-end">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="w-full mt-1">
      <p className="p__opensans !text-cgrey">{tags}</p>
    </div>
  </div>
);

export default MenuItem;
