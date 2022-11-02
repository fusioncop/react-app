import React from "react";
import { useNavigate } from "react-router-dom";

function Main(props) {
  const navigate = useNavigate();
  const NumberBaseballGame = () => {
    // 👇️ navigate programmatically
    navigate('/NumberBaseballGame');
  };
  const ReactionVelocity = () => {
    // 👇️ navigate programmatically
    navigate('/ReactionVelocity');
  };
  const racing = () => {
    // 👇️ navigate programmatically
    navigate('/racing');
  };
  const RpsPage = () => {
    // 👇️ navigate programmatically
    navigate('/RpsPage');
  };
  const TimeCal = () => {
    // 👇️ navigate programmatically
    navigate('/TimeCal');
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ marginBottom: "20px" }}>Simple Web Games</h1>
      <div className="games">
        <button className="mainBtn" style={{ backgroundColor: "orange", color: "white" }} onClick={NumberBaseballGame}>BaseBall</button><br/><br/>
        <button className="mainBtn" style={{ backgroundColor: "green", color: "white" }} onClick={ReactionVelocity}>ReactionRate</button><br/><br/>
        <button className="mainBtn" style={{ backgroundColor: "violet", color: "white" }} onClick={racing}>Racing</button><br/><br/>
        <button className="mainBtn" style={{ backgroundColor: "Red", color: "white" }} onClick={RpsPage}>RockPaperScissors</button><br/><br/>
        <button className="mainBtn" style={{ backgroundColor: "blue", color: "white" }}onClick={TimeCal}>TimeCalculator</button><br/>
      </div>
    </div>
  );
}

export default Main;
