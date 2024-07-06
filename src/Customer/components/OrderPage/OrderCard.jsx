import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  const handleOrderClick = () => {
    navigate(`/account/order/${5}`); // Replace 5 with the actual order ID
  };
  return (

    <div onClick={ handleOrderClick}
    style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px', marginBottom: '16px' , textShadow:'lg' }} className="shadow-md hover:shadow-2xl  border">
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid item xs={6}>
          <div style={{ display: "flex", cursor: "pointer" }}>
            <img
              style={{
                width: "5rem",
                height: "5rem",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "0.5rem",
              }}
              src="https://assets.ajio.com/medias/sys_master/root/20231012/KbmK/65281b64afa4cf41f53f3e50/-473Wx593H-469514967-darkblue-MODEL.jpg"
              alt="Men Slim Mid Rise Black Jeans"
            />
            <div
              style={{
                marginLeft: "1.25rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <p style={{ fontSize: '0.875rem', fontWeight: 500, margin: 0 }}>
                Men Slim Mid Rise Black Jeans
              </p>
              <p style={{ fontSize: '0.75rem', color: '#757575', fontWeight: 600, margin: 0 }}>
                Size: M
              </p>
              <p style={{ fontSize: '0.75rem', color: '#757575', fontWeight: 600, margin: 0 }}>
                Color: Black
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p style={{ fontSize: '0.875rem', fontWeight: 500, margin: 0 }}>
            ₹3434
          </p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <AdjustIcon style={{ width: "15px", height: "15px", color: 'green', marginRight: '0.5rem' }} />
                <p style={{ fontSize: '0.75rem', color: '#757575', margin: 0 }}>
                  Delivered On March 04
                </p>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#757575', margin: 0 }}>
                Your item has been delivered
              </p>
            </div>
          )}
          {false && (
            <p style={{ fontSize: '0.75rem', color: '#757575', margin: 0 }}>
              Expected Delivery On March 03
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
