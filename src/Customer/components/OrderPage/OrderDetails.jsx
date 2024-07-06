import React from "react";
import AddressCard from "../AdressCard/AddressCard"; // Corrected import statement
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold py-7 text-xl">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid
            item
            xs={12}
            key={item}
            className="shadow-xl rounded-md p-5 border"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top rounded-md"
                  src="https://assets.ajio.com/medias/sys_master/root/20231012/KbmK/65281b64afa4cf41f53f3e50/-473Wx593H-469514967-darkblue-MODEL.jpg"
                  alt="Men Slim Mid Rise Black Jeans"
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: Pink</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: Linaria</p>
                  <p>₹13,464</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500], display: 'flex', alignItems: 'center' }}>
                <StarBorderIcon sx={{ fontSize: "2rem", px: 1 }} />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
