import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { Toaster } from "react-hot-toast";
import { persistor, store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              className: "",
              duration: 2000,
              style: {
                background: "#363636",
                color: "#fff",
              },

              success: {
                duration: 1000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
