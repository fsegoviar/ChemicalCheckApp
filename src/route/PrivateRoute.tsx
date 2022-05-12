import React from 'react';
import {Navigate, Route,} from "react-router-dom";

const PrivateRoute = ({ component, ...rest }: any) => {
  return (
    <Route {...rest} render={(props: any) => {
      if (!localStorage.getItem("language")) {
        // not logged in so redirect to login page with the return url
        return <Route
          path="*"
          element={<Navigate to="/language" replace/>}
        />
      }

      // authorized so return component
      return <Route
        path="*"
        element={component}
      />
    }} />
  );
};

export default PrivateRoute;