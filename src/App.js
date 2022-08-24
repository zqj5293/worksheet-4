import React from "react";
import {
  Route,
  Routes,
  NavLink,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
import NotFoundPage from "./pages/404";

const App = () =>  {
    return (     
      <Router>
        <div>
          <h1>Software Engineering Empirical Evidence Database SEED</h1>
          <ul>
            <li><NavLink exact to = "/">Home</NavLink></li>
            <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
            <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
            <li><NavLink exact to = "/">Home</NavLink></li>
          </ul>
          <div className="header">
            <Routes>
              <Route exact path="/" component={Home}/>
              <Route  path="/SEPractice" component={SEPractice}/>
              <Route  path="/SubmitArticle" component={SubmitArticle}/>
              <Route exact path="/404" component={NotFoundPage}/>
            </Routes>
          {/* <Redirect to="/404" /> */}
          </div>
        </div>
      </Router>  

      );
}
export default App;