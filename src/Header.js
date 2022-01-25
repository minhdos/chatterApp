import React from 'react'

class Header extends React.Component {
  constructor() {
    this.state = {
      text: "",
    };
    this.changeTitle  = this.changeTitle.bind(this);
  }
  changeTitle = () => {
    this.setState({title: "Cool title"});
  }
  render() {
    return (
      <header className="header">
      <div className="logo">
        <span className="title">CHATTER!</span>
      </div>
    </header>
    );
  }
}

export default Header