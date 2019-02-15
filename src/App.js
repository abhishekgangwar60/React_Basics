import React, { Component } from "react";
import Child from "./child";

class App extends Component {
  state = {
    Name: "Abhishek"
  };

  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Parent Get Derived state from props");
  }

  componentDidMount() {
    this.setState({ Name: "ChangedInDidMount" });
    console.log("Parent Component did mount");
  }

  shouldComponentUpdate() {
    console.log("Parent Should Component Update");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("Parent Get SnapShot before update");
  }

  componentDidUpdate() {
    console.log("Parent Component did update");
  }

  componentWillUnmount() {
    console.log("Parent Component will unmount");
  }

  changeText = () => {
    this.setState({ Name: "Robert" });
  };

  render() {
    console.log("Parent Render");
    return (
      <div>
        Welcome {this.state.Name}
        <div>
          <button onClick={this.changeText}>Click Me</button>
        </div>
        <Child />
      </div>
    );
  }
}

export default App;
