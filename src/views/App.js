import { React, useEffect, useState } from 'react';

import '../styles/style.scss';
import '../styles/styleResponsive.scss';

import "../Fontawesome_v6/css/all.css";

import Header from '../components/Header/Header';
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../Errors/ErrorBoundary";
import RoutesHeader from '../routes/routesHeader/RoutesHeader';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTopRouter';
import LoadingStart from './LoadingStart';
import LoadingPage from './LoadingPage';
import Map from '../components/Home/Feed/Map';

function App() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(response => {
        const { body } = response
        setPost(body)
      })
  }, [])

  return (
    <>
      {
        post ? <BrowserRouter>
          <div className="App">
            <div className="App_header">
              <Header />
            </div>
            <div className="App_body">
              <RoutesHeader />
              <ScrollToTop />
            </div>
          </div>
        </BrowserRouter> :
          <LoadingPage />
      }
      {/* <Map/> */}
    </>
  );

}

<ErrorComponent />
export default withErrorBoundary(App, {
  FallbackComponent: ErrorComponent,
})
