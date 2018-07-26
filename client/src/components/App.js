import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'; //logic untuk ganti komponen

import Header from './Header';
import Footer from './Footer';
//import Dashboard from './Dashboard';
//import SurveyNew from './SurveyNew;';
//import Landing from './Landing';

const App = () => {
    return(
        <div className="container"> 
            <BrowserRouter>
            <div>
              <Header />
              

            </div>
            </BrowserRouter>
        </div>
    );

};

export default App;