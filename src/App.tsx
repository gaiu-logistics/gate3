import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/chakra.theme";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import { useEffect, useState } from "react";
import Keycloak from "keycloak-js";
// const cors = require('cors');    
// App.use(cors());
const keycloakInstance = new Keycloak({
  clientId: "ow3-uni-login-app",
  realm: "OnWeb3Keycloak",
  url: "https://gate2.alkebulanmeta.network/",
});
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    keycloakInstance
      .init({
        onLoad: "login-required",
        checkLoginIframe: false,
        redirectUri: "https://gate3v.alkebulanmeta.network/",
      })
      .then(() => {
        setIsAuthenticated(keycloakInstance.tokenParsed!.hTA3);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <Login
                isAuthenticated={isAuthenticated}
                keycloakInstance={keycloakInstance}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
