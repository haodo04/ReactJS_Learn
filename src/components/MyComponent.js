import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Hao do",
    address: "HCM",
    age: 20,
  };

  handleClick = (event) => {
    console.log('>>> click me my button')

    // merge state => react class
    this.setState({
        name: 'Hao ne',
        age: Math.floor((Math.random() * 100) + 1)
    })
    console.log(this.state.name)
  }

  handleOnMouseEvent(event) {
    console.log(event.pageX)
  }

  render() {
    return (
      <div>
        My name is {this.state.name}
         and I'm {this.state.age}
        <button onMouseOver={this.handleOnMouseEvent}>Hover me</button>
        <button onClick={this.handleClick}>On click</button>
      </div>
    );
  }
}

export default MyComponent;
