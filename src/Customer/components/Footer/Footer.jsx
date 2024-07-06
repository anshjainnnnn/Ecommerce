import { Typography, Button, Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        {/* Company Section */}
        <Grid item xs={12} sm={6} md={3}>
          <div><Typography className="pb-5" variant="h6">Company</Typography></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>About</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>Blog</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>Career</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>Press</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>Top</Button></div>
        </Grid>

        {/* Solutions Section */}
        <Grid item xs={12} sm={6} md={3}>
          <div><Typography className="pb-5" variant="h6">Products</Typography></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>kurta</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>dress</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>t-shirt</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>shirt</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>jeans</Button></div>
        </Grid>

        {/* Documentation Section */}
        <Grid item xs={12} sm={6} md={3}>
          <div><Typography className="pb-5" variant="h6">Documentation</Typography></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>API Docs</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>User Guide</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>Integration</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>Tutorials</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>FAQs</Button></div>
        </Grid>

        {/* Legal Section */}
        <Grid item xs={12} sm={6} md={3}>
          <div><Typography className="pb-5" variant="h6">Legal</Typography></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>Privacy Policy</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>Terms of Service</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>Cookie Policy</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>Compliance</Button></div>
          <div><Button className="pb-5" sx={{ color: "white" }}>Contact</Button></div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
