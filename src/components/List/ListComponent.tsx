import React from 'react';
import {Box, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const ListComponent = () => {

  const [translation] = useTranslation("global");

  return (
    <Box sx={{
      backgroundColor:"#91BE33",
      width: "100%",
      height: "100%",
      border: "2px solid white",
      borderRadius: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Typography variant={"h6"} color={"white"} style={{fontWeight: "bold"}}>{translation("reports.notFound")}</Typography>
    </Box>
  );
};

export default ListComponent;