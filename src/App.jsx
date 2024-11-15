import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./redux/store";
import { closeSidebar } from "./redux/actions/sidebarActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 993) {
        dispatch(closeSidebar());
      }
    };

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div>
          <Routes>
            <Route/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
