import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Button } from "@headlessui/react";

const cartitem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/l3khsi80/kurta/1/c/6/l-mtml0042-328-manthan-original-imagenvzkm3v9vxh.jpeg?q=70"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-70">Size: L,white</p>
          <p className="opacity-70 mt-2"> Seller :Raymomnds</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="semibold">₹199</p>
            <p className="opacity-50 line-through">₹399</p>
            <p className="text-green-600 font-semibold">50% off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <RemoveCircleOutlineRoundedIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">4</span>

          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineRoundedIcon />
          </IconButton>

          <div>
            <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cartitem;
