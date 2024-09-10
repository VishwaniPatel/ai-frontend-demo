import React, { memo, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DEFAULT_PATHS } from "../../config";
import RouteItem from "./RouteItem";
import NotFound from "../../views/default/NotFound";

const RouteIdentifier = ({
  routes,
  fallback = <div className="loading" />,
  notFoundPath = DEFAULT_PATHS.NOTFOUND,
}) => (
  <Suspense fallback={fallback}>
    <Routes>
      {routes.map((route, rIndex) => {
        if (route.redirect) {
          return (
            <Route
              key={`r.${rIndex}`}
              path={route.path}
              element={<Navigate to={route.to} />}
            />
          );
        }
        return (
          <Route
            key={`r.${rIndex}`}
            path={route.path}
            element={route.element}
          />
        );
      })}
      <Route path="*" element={<Navigate to={notFoundPath} />} />
      <Route path="*" element={<Navigate to={notFoundPath} />} />
    </Routes>
  </Suspense>
);

export default memo(RouteIdentifier);
