import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // destructuring array/object
    const { listUsers } = this.props; // object
    return (
      <div>
        {listUsers.map((user, index) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name}</div>
              <div>My age {user.age}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;
