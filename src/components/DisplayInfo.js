import React from "react";
import "./DisplayInfo.scss"
import logo from '../logo.svg'

class DisplayInfo extends React.Component {

  constructor(props) {
    super(props);
    // babel compiler
    this.state = {
      isShowListUser: true
    }
    console.log(">>> call me constructor")
  }

  state = {
    isShowListUser: true
  }

  componentDidMount() {
    console.log(">>> cal me component did mount")
  }


  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser
    })
  }

  render() {
    console.log(">>> call me render")
    // destructuring array/object
    const { listUsers } = this.props; // object
    return (
      <div className="display-info-container">
        {/* <img src={logo}/> */}
        <div>
            <span onClick={() => {this.handleShowHide()}}>Hide list user</span>

        </div>
        <div>{listUsers.map((user, index) => {
                return (
                    <div key={user.id} className=
                    {+user.age > 22 ? "green" : "red"}>
                    {/* style inline trong jsx */}
                    <div style={{color: 'blue', paddingTop:"20px"}}>My name's {user.name}</div>
                    <div>My age's {user.age}</div>
                    <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                    </div>
                )            
        })}
        </div>
      </div>
    );
  }
}

export default DisplayInfo;
