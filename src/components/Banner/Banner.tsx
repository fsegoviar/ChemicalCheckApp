import React from 'react';
import {Box, Typography} from "@mui/material";

const Banner = ({ title }: any) => {
  return (
    <Box sx={{
      position: "absolute",
      top:0,
      left:0,
      width: "100%",
      height: "10vh",
      backgroundColor: "#2A8854",
      opacity: "0.8",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Box>
        <Typography variant={"h3"} style={{fontWeight: "bold", color: "white"}}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;