import { ConfigProvider } from "antd";
import enUS from "antd/es/locale/en_US";
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import i18n from "./i18n/i18n";
import LayoutWrapper from "./layouts/LayoutWrapper";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./components/Footer/Footer";

type ContextType = {
  searchText: string;
  setSearchText: (c: string) => void;
};

export const ContextContainer = createContext<ContextType>({
  searchText: "",
  setSearchText: () => {},
});

const App = () => {
  const [antdLocale, setAntdLocale] = useState(enUS);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setAntdLocale(i18n.language === "en" ? enUS : enUS);
  }, []);

  return (
    <div id="app">
      <ConfigProvider locale={antdLocale}>
        <ContextContainer.Provider
          value={{ searchText: searchText, setSearchText: setSearchText }}
        >
          <Provider store={store}>
            <LayoutWrapper>
              <Header />
              <Outlet />
              <Footer />
            </LayoutWrapper>
          </Provider>
        </ContextContainer.Provider>
      </ConfigProvider>
    </div>
  );
};

export default App;
