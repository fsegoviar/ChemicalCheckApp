import {styled} from "@mui/material";
import {experimental_sx as sx} from "@mui/material";
import portada from "../../images/portada.png";

const BackgroundComponent = styled('div')(
  sx({
    backgroundImage: `url(${portada})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  })
);

export default BackgroundComponent;