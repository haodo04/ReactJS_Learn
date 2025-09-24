import React from "react";

class DisplayInfo extends React.Component {

  state = {
    isShowListUser: true
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser
    })
  }

  render() {
    // destructuring array/object
    const { listUsers } = this.props; // object
    return (
      <div>
        <div>
            <span onClick={() => {this.handleShowHide()}}>Hide list user</span>

        </div>
        <div>{listUsers.map((user, index) => {
                return (
                    <div key={user.id} className=
                    {+user.age > 22 ? "green" : "red"}>
                    <div>My name's {user.name}</div>
                    <div>My age's {user.age}</div>
                    </div>
                )            
        })}
        </div>
      </div>
    );
  }
}

export default DisplayInfo;
