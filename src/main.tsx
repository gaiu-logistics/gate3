import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import theme from "./utils/chakra.theme";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import AppGateway from "./views/AppGateway";
import Login from "./views/Login";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";

const chains = [mainnet];
const projectId = "95496c75a9c7d41420d3d53194485638";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
export const ethereumClient = new EthereumClient(wagmiConfig, chains);

const rootElement = document.getElementById("root") as Element;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<AppGateway />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </WagmiConfig>
  </React.StrictMode>
);
