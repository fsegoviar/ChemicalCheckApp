import React from 'react';
import {Box, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const ListComponent = () => {

  const [translation] = useTranslation("global");


  return (
    <Box sx={{
      backgroundColor:"#FFFFFF",
      width: "100%",
      height: "100px",
      overflowY: "scroll",
      border: "2px solid #91BE33",
      boxSizing: "border-box",
      borderRadius: 2,
      display: "flex",
      position: "relative",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Typography variant={"h6"} color={"#91BE33"} style={{fontWeight: "bold"}}>{translation("reports.notFound")}</Typography>
    </Box>
  );
};

export default ListComponent;