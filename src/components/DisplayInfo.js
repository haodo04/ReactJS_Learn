import React from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

// class DisplayInfo extends React.Component {
//   state = {
//     isShowListUser: true,
//   };

//   handleShowHide = () => {
//     this.setState({
//       isShowListUser: !this.state.isShowListUser,
//     });
//   };

//   render() {
//     // destructuring array/object
//     const { listUsers } = this.props; // object
//     return (
//       <div className="display-info-container">
//         <div></div>
//         <div>
//           {listUsers.map((user, index) => {
//             return (
//               <div key={user.id} className={+user.age > 22 ? "green" : "red"}>
//                 {/* style inline trong jsx */}
//                 <div style={{ color: "blue", paddingTop: "20px" }}>
//                   My name's {user.name}
//                 </div>
//                 <div>My age's {user.age}</div>
//                 <button onClick={() => this.props.handleDeleteUser(user.id)}>
//                   Delete
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props;
  return (
    <div className="display-info-container">
      <div></div>
      <div>
        {listUsers.map((user, index) => {
          return (
            <div key={user.id} className={+user.age > 22 ? "green" : "red"}>
              <div style={{ color: "blue", paddingTop: "20px" }}>
                My name's {user.name}
              </div>
              <div>My age's {user.age}</div>
              <button onClick={() => props.handleDeleteUser(user.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayInfo;
