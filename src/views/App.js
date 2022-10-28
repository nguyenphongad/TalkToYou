import { React } from 'react';

import '../styles/style.scss';
import "../Fontawesome_v6/css/all.css";

import Header from '../components/Header/Header';
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../Errors/ErrorBoundary";
import RoutesHeader from '../routes/routesHeader/RoutesHeader';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTopRouter';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_header">
          <Header />
        </div>
        <div className="App_body">
            <RoutesHeader />
            <ScrollToTop/>
        </div>

      </div>
    </BrowserRouter>
  );

}

<ErrorComponent />
export default withErrorBoundary(App, {
  FallbackComponent: ErrorComponent,
})
