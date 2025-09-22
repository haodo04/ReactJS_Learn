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

  handleOnChangeInput = (event) => {
    this.setState({
        name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div>
        My name is {this.state.name}
        and I'm {this.state.age}
        <button onMouseOver={this.handleOnMouseEvent}>Hover me</button>
        <button onClick={this.handleClick}>On click</button>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input type="text"
                onChange={(event) => this.handleOnChangeInput(event)}
            />
            <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
