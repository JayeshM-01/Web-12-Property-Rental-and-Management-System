import "./App.css";
import MainWebsite from "./pages/MainWebsite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Suspense } from "react";
import Properties from "./pages/properties/properties";
import Property from "./pages/property/property";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import ChatbotIframeComponent from "./components/chatbot";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Userdetail from "./infoContainer/detailcon";
import { useState } from "react";
function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });
  return (
    <Userdetail.Provider value={{userDetails , setUserDetails}}>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <Suspense fallback={<div>Loadingggggg!!!!!!!</div>}>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/" element={<MainWebsite />} />
          <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
          <Route path="/chatbot" element = {<ChatbotIframeComponent/>} />
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
    <ToastContainer/>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </Userdetail.Provider>
  );
}

export default App;
