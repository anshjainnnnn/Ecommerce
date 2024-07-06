import React from "react";
import Cartit from "./cartitem/CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {


  const navigate = useNavigate();
  const handlecheckout =()=>
    {
      navigate("/checkout?step=2")
    }
  return (
    <div className="lg:grid grid-cols-3 lg:px-16 relative">
      <div className="col-span-2">
        {[1,1,1,1,1].map((item)=> <Cartit/>)}
      </div>

      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="">
          <p className="uppercase font-bold opacity-60 pb-4">Price Deatils</p>
          <hr />

          <div className="space-y-3 font-semibold mt-10">
            <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span>4645</span>
            </div>

            <div className="flex justify-between pt-3 text-black">
              <span>Discount</span>
              <span className="text-green-600">4645</span>
            </div>

            <div className="flex justify-between pt-3 ">
              <span>Deilvery Charge</span>
              <span className="text-green-600">4645</span>
            </div>

            <div className="flex justify-between pt-3 text-green-600 font-bold">
              <span>Total Amount</span>
              <span className="text-green-600">3232</span>
            </div>
          </div>
          <Button onClick={handlecheckout}
            variant="contained  "
            className="w-full mt-5 rounded-sm"
            sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" , }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
