import { Box } from "@mui/system";
import React from "react";

type propsImage = {
  url: string;
  colorFooter: string;
};

export const ImageComponent = (props: propsImage) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            clipPath: "polygon(20% 0, 100% 0, 85% 100%, 3% 100%);",
            backgroundColor: "white",
            backgroundImage: `url(${props.url})`,
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "10%",
              position: "absolute",
              left: "0",
              bottom: "0",
              backgroundColor: props.colorFooter,
              clipPath: "polygon(3% 0%, 97% 0, 94% 100%, 2% 100%);",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
