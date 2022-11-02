import "./App.css";
import WordChainGame from "./components/WordChainGame/WordChainGame";
import NumberBaseballGame from "./components/NumberBaseballGame/NumberBaseballGame";
import Main from "./components/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactionVelocity from "./components/ReactionVelocity/ReactionVelocity";
import Racing from "./components/Racing/App";
import TimeCal from "./components/TimeCal/TimeCal";
import RpsPage from './components/RpsPage/index'
import React from 'react';
function App(props) {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/WordChainGame" element={<WordChainGame/>} />
            <Route
                exact
                path="/NumberBaseballGame"
                element={<NumberBaseballGame/>}
            />
            <Route exact path="/ReactionVelocity" element={<ReactionVelocity/>} />
            <Route exact path="/Racing" element={<Racing/>} />
            <Route exact path="/RpsPage" element={<RpsPage/>} />
            <Route exact path="/TimeCal" element={<TimeCal/>} />
            <Route exact path="*" element={<Main/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;