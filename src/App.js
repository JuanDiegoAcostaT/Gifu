import React, { Suspense } from "react";
import { Router } from "@reach/router";
import "./globalStyles/styles.css";
import { UserContextProvider } from "./context/UserContext";

import Detail from "./pages/Detail/index";
import SearchResults from "./pages/SearchResults";
import Header from "./components/Header/index";
import TopBar from "./components/TopBar/index";
import Error from "./pages/404/index";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Home = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <>
      <UserContextProvider>
        <div className="App">
          <Suspense fallback={null}>
            <TopBar />
            <Header />
            <section className="App-content">
              <Router>
                <Home path="/" />
                <SearchResults path="/search/:keyword/:rating/:lang" />
                <Detail path="/gif/:id" />
                <Login path="/login" />
                <Register path="/register" />
                <Error default />
              </Router>
            </section>
          </Suspense>
        </div>
      </UserContextProvider>
    </>
  );
}
