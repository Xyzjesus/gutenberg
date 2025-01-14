import "./App.css";
import { useState } from "react";
import { AppStateContext } from "././context/AppStateContext";
import { Window as KeplrWindow } from "@keplr-wallet/types";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import LegalPage from "./components/LegalPage/LegalPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderSpoiler from "./components/HeaderSpoiler/HeaderSpoiler";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import NewButton from "./components/newButton/newButton";
import Swap from "./components/Swap/Swap";
import ManageAssets from "./components/ManageAssets/ManageAssets";
import License from "./components/LicensePage/LicensePage";
import { GrazProvider } from "graz";
import { CustomChains } from "../src/utils/config";

declare global {
  interface Window extends KeplrWindow { }
}

function App() {
  const [address, setAddress] = useState("");
  return (
    <GrazProvider
      grazOptions={{
        defaultChain: CustomChains.bostrom,
      }}
    >
      <div className="App">
        <div className="container">
          <AppStateContext.Provider value={{ address, setAddress }}>
            <Router>
              <HeaderSpoiler />
              <Routes>
                <Route path="/" element={<WelcomePage />}></Route>
                <Route path="/legalinfo" element={<LegalPage />}></Route>
                <Route path="/License" element={<License />}></Route>
                <Route path="/create" element={<MainPage />}></Route>
                <Route path="/newBT" element={<NewButton />}></Route>
                <Route path="/swap" element={<Swap />}></Route>
                <Route path="/manage-assets" element={<ManageAssets />}></Route>
              </Routes>
              <Footer />
            </Router>

            <ToastContainer autoClose={false} />
          </AppStateContext.Provider>
        </div>
      </div>
    </GrazProvider>
  );
}

export default App;
