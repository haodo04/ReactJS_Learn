import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  render() {
    const myInfo = ["ab", "a", "b"];
    return (
      <div>
        <UserInfo/>
        <br/> <br/>
        <DisplayInfo name="Hao do" age = "30"/>
        <DisplayInfo name="Hao do" age = {26} myInfo={myInfo}/>
      </div>
    );
  }
}

export default MyComponent;
