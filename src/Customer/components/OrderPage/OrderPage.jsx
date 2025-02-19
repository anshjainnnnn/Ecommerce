import React from "react";
import { Grid, Box } from "@mui/material";
import OrderCard from "./OrderCard";

const OrderStatus = [
  { label: "On the Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const OrderPage = () => {
  return (
    <div className="px:5 lg:px-20">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Box className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filters</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Order Status</h1>
              {OrderStatus.map((option, index) => (
                <div className="flex items-center" key={index}>
                  <input
                    id={option.value}
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </Box>
        </Grid>
        <Grid item xs={9}>
      <div className='space-y-5'>{[1,1,1,1,1].map((item)=><OrderCard />)}  </div>  
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderPage;
