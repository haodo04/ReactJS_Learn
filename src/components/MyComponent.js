import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

  state = {
    listUsers: [
      {id: 1, name: "Hao do", age: "30"},
      {id: 2, name: "Tuan", age: "20"},
      {id: 3, name: "Son", age: "24"}
    ]
  }

  render() {
    return (
      <div>
        <UserInfo/>
        <br/> <br/>
        <DisplayInfo 
        listUsers={this.state.listUsers}
        />
      </div>
    );
  }
}

export default MyComponent;
