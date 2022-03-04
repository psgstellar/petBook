import React from "react";
import YoonOceanProfile from "./YoonOceanProfile";
import logo from "../logo.svg";
import HyadesProject from "./KnowHowPost";

// 정상적인 실행이 되는지 확인하기 위한 UI로 변경하셔도 됩니다
const WelcomeReact = ({ isLoading, error, data }) => {
  return (
    <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Progress <code>$ yarn install</code> Successfully done and React is
            ready to run your codes!
          </p>
          <YoonOceanProfile username="yoonOcean" name="윤성연" />
          <HyadesProject isLoading={isLoading} error={error} data={data} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeReact;
