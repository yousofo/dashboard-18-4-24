import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import { Provider } from "react-redux";
import store from './app/store'
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import CryptoWallet from "./pages/Crypto-Wallet/CryptoWallet";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Crypto-Wallet" element={<CryptoWallet/>}/>
            </Routes>
          </Layout>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
