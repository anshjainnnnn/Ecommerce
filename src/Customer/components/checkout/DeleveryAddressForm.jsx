import { Button, TextareaAutosize } from "@mui/material"; // Importing MUI's Button and TextareaAutosize
import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AdressCard/AddressCard";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const DeleveryAddressForm = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const Address=
    {
      FristName:data.get("FirstName"),
      LastName:data.get("LastName"),
      streetAddress:data.get("Address"),
      city:data.get("City"),
      state:data.get("State"),
      zipCode:data.get("Zip"),
      mobile:data.get("phone Number")
    }
    console.log("Address:", Address);
  };

  return (


    <div>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
          <form onSubmit={HandleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="FirstName"
                    name="FirstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="LastName"
                    name="LastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="Address"
                    name="Address"
                    placeholder="Address"
                    multiline
                    rows={4}
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="City"
                    name="City"
                    label="City"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="State"
                    name="State"
                    label="State/Provience/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Zip"
                    name="Zip"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Phone Number"
                    name="Phone Number"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <div className="cursor-pointer">
                    <Button
                      sx={{ py:1, mt:5 , bgcolor: "RGB(145 85 253)" }}
                      size="large"
                      variant="contained"
                      type="submit"
                    >
                      Deliver Here
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeleveryAddressForm;
