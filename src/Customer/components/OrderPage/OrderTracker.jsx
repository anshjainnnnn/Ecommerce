import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out for Delivery",
    "Delivered"
];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
                <Step key={index}>
                    <StepLabel sx={{ color: "#9155FD", fontSize: "1rem" }}>
                        {label}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    </div>
  );
};

export default OrderTracker;
