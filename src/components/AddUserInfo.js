import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "Hao do",
//     address: "HCM",
//     age: 20,
//   };

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);

//     this.props.handleAddNewUser({
//       id: Math.floor((Math.random() * 100) + 1) + "random",
//       name: "hao do",
//       age: "26"
//     });
//   };
//   render() {
//     return (
//       <div>
//       My name is {this.state.name} and I'm {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />
//           <label>Your age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  const [name, setName] = useState('Hao do');
  const [age, setAge] = useState('26');

  const handleOnChangeInput = (event) => {
    setName(event.target.value)
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value)
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "random",
      name: "hao do",
      age: "26",
    });
  };

  return (
    <div>
      My name is {name} and I'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <label>Your age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfo;
