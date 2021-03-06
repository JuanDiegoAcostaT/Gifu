import React, { Suspense } from "react";
import { Router } from "@reach/router";
import { UserContextProvider } from "./context/UserContext";
import { Global, css } from "@emotion/core";
import Detail from "./pages/Detail/index";
import SearchResults from "./pages/SearchResults";
import Header from "./components/Header/index";
import TopBar from "./components/TopBar/index";
import Error from "./pages/404/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorites from "./pages/Favs/index";
import { Helmet } from "react-helmet";

const Home = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          href="https://i.imgur.com/lAYEJRF.png"
          type="image/png"
        />
      </Helmet>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap");

          :root {
            --fz: 16px;
            --theme--contrast-0: #121212;
            --theme-body-bg: #03071e;
            --theme-body-txt: #f3f3f3;
            --search-size-mx-h: 3rem;
            --zIndex-header: 20;
            --zIndex-component: 5;
            --brand-color_1: #370617;
            --brand-color_2: #6a040f;
            --brand-color_3: #9d0208;
            --brand-color_4: #d00000;
            --brand-color_5: #dc2f02;
            --brand-color_6: E85D04;
          }

          body {
            background-color: var(--theme-body-bg);
            color: white;
            text-align: center;
            font-family: "Manrope", sans-serif;
            margin: 0;
            padding: 0;
          }

          html {
            margin: 0;
            padding: 0;
          }

          .main__title {
            text-decoration: none;
            color: white;
            list-style: none;
          }

          ul {
            list-style: none;
          }
          li a {
            text-decoration: none;
          }

          .App {
            text-align: center;
          }

          .App-logo {
            margin: 10px auto;
            padding: 20px 0;
            width: 144px;
          }

          .App-logo img {
            object-fit: cover;
            width: 100%;
          }

          .App-title {
            color: var(--theme-body-txt);
            margin-top: 1rem;
            text-align: left;
          }

          .App-content {
            background-color: var(--theme-body-bg);
            color: var(--theme-body-txt);
            display: flex;
            flex-direction: column;
            font-size: calc(10px + 2vmin);
            min-height: 100vh;
            text-align: left;
          }

          /*----------*/

          .App-main {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .App-wrapper {
            width: 95%;
            max-width: 90rem;
            margin: 0 auto;
          }

          .App-results {
            flex-shrink: 2;
            width: 100%;
          }

          .App-category {
            margin-bottom: 25px;
            width: 100%;
          }

          .o-header {
            background-color: inherit;
            position: sticky;
            top: 0;
            z-index: var(--zIndex-header);
            max-height: var(--search-size-mx-h);
          }

          @media screen and (min-width: 53rem) {
            .App-main {
              flex-direction: row;
            }

            .App-category {
              position: sticky;
              top: var(--search-size-mx-h);
              width: 40%;
              max-width: 300px;
            }
          }

          .btn {
            border: 1px solid transparent;
            padding: 0.5rem 1rem;
            background-color: var(--brand-color_3);
            color: var(--theme-body-txt);
            cursor: pointer;
            font-size: 1rem;
          }

          .btn:hover {
            background-color: var(--brand-color_6);
          }

          .page-error {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            text-align: center;
          }

          .page-error .code-error {
            font-size: 5rem;
            font-weight: bold;
            font-style: italic;
          }

          .page-error .msg-error {
            font-size: 1.5rem;
            margin: 1rem 0;
          }

          .page-error .gif-error {
            margin: 1rem auto;
            width: 250px;
            height: 250px;
          }

          .login__title {
            text-align: center;
            padding: 20px 10px;
          }
        `}
      />
      <UserContextProvider>
        <div>
          <Suspense fallback={null}>
            <TopBar />
            <Header />
            <section>
              <Router>
                <Home path="/" />
                <SearchResults path="/search/:keyword/:rating/:lang" />
                <Detail path="/gif/:id" />
                <Login path="/login" />
                <Register path="/register" />
                <Favorites path="/favs" />
                <Error default />
              </Router>
            </section>
          </Suspense>
        </div>
      </UserContextProvider>
    </>
  );
}
