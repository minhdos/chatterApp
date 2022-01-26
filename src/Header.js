import React from 'react'

// This allows to componentized header
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "CHATTER!",
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  componentDidMount() {}
  changeTitle = () => {
    this.setState({ text: "Cool title" });
  };
  render() {
    return (
      <header className="header" onClick={this.changeTitle}>
      <div className="logo">
        <span className="title">{this.state.text}</span>
      </div>
    </header>
    );
  }
}

export default Header