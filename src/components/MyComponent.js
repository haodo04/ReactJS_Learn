import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Hao do", age: "30" },
//       { id: 2, name: "Tuan", age: "20" },
//       { id: 3, name: "Son", age: "24" },
//     ],
//   };

//   handleAddNewUser = (userObject) => {
//     console.log(">>>> check data from parent: ", userObject);
//   };

//   // dùng 3 cham de copy tat ca ptu
//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter(item => item.id !== userId)
//     this.setState({
//       listUsers : listUsersClone
//     })
//   }

//   render() {
//     const test = "Hao do and it faculty";
//     const testObj = { name: "hao do", age: "26" };

//     return (
//       <>
//         {test}
//         <br />
//         <div>
//           <div className="a">
//             <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//             <br /> <br />
//             <DisplayInfo listUsers={this.state.listUsers}
//             handleAddNewUser={this.handleAddNewUser} />
//           </div>
//           <div className="b"></div>
//         </div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Hao do", age: "30" },
    { id: 2, name: "Tuan", age: "20" },
    { id: 3, name: "Son", age: "24" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsers);
  };

  return (
    <>
      <br />
      <div>
        <div className="a">
          <AddUserInfo handleAddNewUser={handleAddNewUser} />
          <br /> <br />
          <DisplayInfo
            listUsers={listUsers}
            handleDeleteUser={handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </div>
    </>
  );
};

export default MyComponent;
