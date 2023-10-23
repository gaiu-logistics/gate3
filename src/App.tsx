import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/chakra.theme";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import { useEffect, useState } from "react";
import Keycloak from "keycloak-js";
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
        redirectUri: "https://gate3.alkebulanmeta.network/",
      })
      .then((authenticated: boolean) => {
        setIsAuthenticated(authenticated);
      });
  }, []);

  console.log(isAuthenticated);
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={isAuthenticated && <Login isAuthenticated />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
