import React from "react";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
       <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
  );
}

export default App;
