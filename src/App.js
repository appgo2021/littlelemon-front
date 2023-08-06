import React from "react";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmPage from "./pages/ConfirmPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
       <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/confirm" element={<ConfirmPage />}></Route>
    </Routes>
  );
}

export default App;
