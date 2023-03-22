import React, { useState, useEffect, Suspense } from "react";
import { Banner, Footer } from "./components";
import { Landing, Menu, Detail, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";
const App = () => {
  const [mode, setMode] = useState(false);
  const handleChange = (e) => {
    if (e.state === true) {
      setMode(true);
    } else {
      setMode(false);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("mode") === "true") {
      setMode(true);
    } else {
      setMode(false);
    }
  }, []);

  return (
    <Suspense fallback="loading">
      <div className={`${mode ? "light" : "dark"} bg-white dark:bg-dark`}>
        <div className=" dark:bg-dark bg-white h-screen ">
          {/* Landing Page */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Landing
                  onChange={(value) => handleChange(value)}
                  state={mode}
                />
              }
            />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/detail/:id" element={<Detail />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>

        {/* <Banner /> */}

        {/* <Footer /> */}

        {/* <Cart /> */}
      </div>
    </Suspense>
  );
};

export default App;
