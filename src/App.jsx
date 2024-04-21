import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./Components";
import { Outlet } from "react-router-dom";
import Pricing from "./Components/Pricing/pricing";
import Card from "./Components/Card/card";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="w-full block">
      <Header />
      <main>
        <Outlet />
        <Pricing />
        <Card />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
