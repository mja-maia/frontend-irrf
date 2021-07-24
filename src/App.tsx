import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { Header, Content } from "./components";
import GlobalStyles from "./styles/global";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <PersistGate loading={null} persistor={persistor} />
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <div className="content">
          <Content>
            <Routes />
          </Content>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
