import { ConfigProvider } from "antd";
import enUS from "antd/es/locale/en_US";
import { useEffect, useState, useContext, createContext } from "react";
import { Outlet } from "react-router-dom";
import i18n from "./i18n/i18n";
import LayoutWrapper from "./layouts/LayoutWrapper";
import Header from "./views/header/Header";

export const ContextContainer = createContext<any>({});

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
          <LayoutWrapper>
            <Header />
            <Outlet />
          </LayoutWrapper>
        </ContextContainer.Provider>
      </ConfigProvider>
    </div>
  );
};

export default App;
