import React, { memo } from "react";
import { Route, Navigate } from "react-router-dom";

const RouteItem = ({ redirect = false, path, to, element }) => {
  if (redirect) {
    if (to) {
      return <Navigate to={to} />;
    }
    return null;
  }

  if (!path || !element) {
    return null;
  }

  return <Route path={path} element={element} />;
};

export default memo(RouteItem);
