import React from "react";

class SupportersClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {},
    };
    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rinta-git");
    const json = await data.json();
    this.setState({ userInfo: json });
    this.timer = setInterval(() => {
      console.log("timer for this component");
    }, 1000);
    console.log(this.props.name + "child didMount");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log(this.props.name + "child rendered");
    const { role } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="profile-container">
        <div>
          <img src={avatar_url} alt={name} />
        </div>
        <p>Name: {name}</p>
        <p>Role: {role}</p>
        <p>Location:{location}</p>
        <p>count1: {this.state.count}</p>
        <p>count2: {this.state.count2}</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 - 1,
            })
          }
        >
          Update Count
        </button>
      </div>
    );
  }
}

export default SupportersClass;
