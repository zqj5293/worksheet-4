import React from "react";
import {
  Route,
  Routes,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
import NotFoundPage from "./pages/404";

const App = () =>  {
  return (
      <Router>
      <div>
        <h1>Software Engineering Empirical Evidence Database (SEED)</h1>
          <ul className="header">
              <li><NavLink exact="true" to = "/">Home</NavLink></li>
              <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
              <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
          </ul>
        <div className="content">
          <Routes>
            <Route exact="true" path="/" element={<Home />}/>
            <Route  path="/SEPractice" element={<SEPractice />}/>
            <Route  path="/SubmitArticle" element={<SubmitArticle />}/>
            <Route exact path="/404" component={NotFoundPage}/>
          </Routes>
        </div>
      </div>
      </Router>
  );
}
 
export default App;