import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importă BrowserRouter și Routes

import SignUpCompany from "./pages/SignUpCompany";
import SingUpUser from "./pages/SignUpUser";
import Agrement from "./pages/Agrement";
import WelcomePage from "./pages/WelcomePage";
import UserExampleLayout from "./pages/UserExampleLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />{" "}
        <Route path="/UserExampleLayout" element={<UserExampleLayout />}></Route>
        <Route path="/SignUpCompany" element={<SignUpCompany />}></Route>
        <Route path="/SignUpUser" element={<SingUpUser />}></Route>
        <Route path="/Agrement" element={<Agrement />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
