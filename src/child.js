import React from "react";

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
    this.state = { name: "Child" };
  }

  static getDerivedStateFromProps() {
    console.log("Child Get dervied state from Props");
  }

  componentDidMount() {
    console.log("Child Component did mount");
  }

  shouldComponentUpdate() {
    console.log("Child Should Component Update");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("Child Get SnapShot before update");
  }

  componentDidUpdate() {
    console.log("Child Component did update");
  }

  componentWillUnmount() {
    console.log("Child Component will unmount");
  }

  changeChildText = () => {
    this.setState({
      name: "childChanged"
    });
  };

  render() {
    console.log("Child Render");
    return (
      <div>
        Welcome child {this.state.Name}
        <div>
          <button onClick={this.changeChildText}>Click child Me</button>
        </div>
      </div>
    );
  }
}
