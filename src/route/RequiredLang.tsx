import {Navigate, useLocation} from "react-router-dom";


const RequiredLang = ({ children }: any) => {
  const location = useLocation();

  if(!localStorage.getItem("language")){
    return <Navigate to="/language" state={{ path: location.pathname}} />
  }

  return children;
};

export default RequiredLang;