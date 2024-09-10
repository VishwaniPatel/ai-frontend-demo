import { lazy } from "react";
import { DEFAULT_PATHS } from "../config";
import { Navigate } from "react-router-dom";

const NotFound = lazy(() => import("../views/default/NotFound"));
const Login = lazy(() => import("../views/default/Login"));
const ForgotPassword = lazy(() => import("../views/default/ForgotPassword"));
const Register = lazy(() => import("../views/default/Register"));
const ResetPassword = lazy(() => import("../views/default/ResetPassword"));
const Unauthorized = lazy(() => import("../views/default/Unauthorized"));
const InvalidAccess = lazy(() => import("../views/default/InvalidAccess"));
const App = lazy(() => import("../App"));
const Home = lazy(() => import("../views/default/Home"));

const defaultRoutes = [
  { path: DEFAULT_PATHS.NOTFOUND, element: <NotFound /> },
  { path: DEFAULT_PATHS.LOGIN, element: <Login /> },
  { path: DEFAULT_PATHS.REGISTER, element: <Register /> },
  {
    path: DEFAULT_PATHS.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
  { path: DEFAULT_PATHS.RESET_PASSWORD, element: <ResetPassword /> },
  { path: DEFAULT_PATHS.UNAUTHORIZED, element: <Unauthorized /> },
  { path: DEFAULT_PATHS.INVALID_ACCESS, element: <InvalidAccess /> },
  { path: DEFAULT_PATHS.APP, element: <App /> },
  { path: "/", element: <Home /> },
  { path: "*", element: <Navigate to={DEFAULT_PATHS.NOTFOUND} /> }, // Redirect for unknown routes
];

export default defaultRoutes;
