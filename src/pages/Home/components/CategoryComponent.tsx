import React from 'react';
import {Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";

const BackgroundOpacity = styled.div`
  background-color: #000000;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const CategoryComponent = ({ urlImg, title, to }: any) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to)
  }


  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: "center",
        height: 200,
        backgroundImage: `url(${urlImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        margin:"20px",
        transition: "all .4s",
        '&:hover': {
          boxShadow: "1px 1px 24px grey",
          transform: "scale(1.05)"
        }
      }}
      onClick={handleClick}
    >
      <BackgroundOpacity />
      <h1 style={{zIndex: "1", textAlign: "center", color: "white"}} >{title}</h1>
    </Paper>
  );
};

export default CategoryComponent;