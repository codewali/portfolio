import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import BCDRCaseStudy from "./pages/BCDRCaseStudy";
import SwiggyCaseStudy from "./pages/SwiggyCaseStudy";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await axios.get(`${API}/`);
        console.log(response.data.message);
      } catch (e) {
        console.error(e, `errored out requesting / api`);
      }
    };
    checkBackend();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/virtual-fitting-room" element={<CaseStudyDetail />} />
          <Route path="/case-study/bcdr-executive-dashboard" element={<BCDRCaseStudy />} />
          <Route path="/case-study/swiggy-group-ordering" element={<SwiggyCaseStudy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;