import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider, useDispatch, useSelector} from "react-redux";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./redux/store";
import { closeSidebar } from "./redux/actions/sidebarActions";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

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
        <div className={`w-full transition-all duration-300 ${ isOpen ? "ml-64" : "ml-0"} max-sm:ml-0`}>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
          <Footer/>
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
