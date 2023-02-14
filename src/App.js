import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header";
import Router from "./router";


import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer
        autoClose={2500}
        theme="dark"
      />
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </>
  );
}

export default App;
