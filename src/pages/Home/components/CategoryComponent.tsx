import React from "react";
import { useNavigate } from "react-router-dom";
import {Paper, Typography} from "@mui/material";

type PropsCategory = {
  title: string;
  to: string;
};

const CategoryComponent = (props: PropsCategory) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.to);
  };

  return (
    <Paper
      sx={{
        p: "20px",
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        height: "10vh",
        background:
          "linear-gradient(0deg, rgba(32, 62, 19, 1) 0%, rgba(37, 131, 75, 1) 100%)",
        cursor: "pointer",
        margin: "20px",
        transition: "all .4s",
        "&:hover": {
          boxShadow: "1px 1px 24px grey",
          transform: "scale(1.05)",
        },
      }}
      onClick={handleClick}
    >
      <Typography variant={"h5"} color={"white"} style={{zIndex: "1", textAlign: "center", fontWeight: "bold"}}>{props.title}</Typography>
    </Paper>
  );
};

export default CategoryComponent;
