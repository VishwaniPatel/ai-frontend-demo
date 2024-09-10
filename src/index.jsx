import React, { useMemo } from "react";
import { createRoot } from "react-dom/client"; // Import createRoot for React 18
import reportWebVitals from "./reportWebVitals";

// import redux requirements
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { store, persistedStore } from "./store";

// import html head tags requirements
import { Helmet } from "react-helmet";
import { REACT_HELMET_PROPS } from "./config";

// import multi language
import LangProvider from "./lang/LangProvider";

// import routing modules
import { BrowserRouter as Router } from "react-router-dom";
import RouteIdentifier from "./routing/components/RouteIdentifier";
import Loading from "./components/loading/Loading";

// import routes
import { getLayoutlessRoutes } from "./routing/helper";
import defaultRoutes from "./routing/default-routes";
import routesAndMenuItems from "./routes";

// import toastify for notification
import { Slide, ToastContainer } from "react-toastify";

// mock server register for demo
import "./@mock-api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/styles.scss";
const Main = () => {
  const layoutlessRoutes = useMemo(
    () => getLayoutlessRoutes({ data: routesAndMenuItems }),
    []
  );
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Helmet {...REACT_HELMET_PROPS} />
        <ToastContainer transition={Slide} newestOnTop />
        <Router basename={import.meta.env.REACT_APP_BASENAME}>
          <LangProvider>
            <RouteIdentifier
              routes={[...layoutlessRoutes, ...defaultRoutes]}
              fallback={<Loading />}
            />
          </LangProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
};

// Use createRoot instead of ReactDOM.render
const container = document.getElementById("root");
const root = createRoot(container); // createRoot is used for React 18
root.render(<Main />);

// Measuring performance
reportWebVitals();
