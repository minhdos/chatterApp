import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput';
import {useState} from "react";


function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(msg) {
    console.log("MY Message", msg)
    setMessages([...messages, msg]);
  }
  return (
  // this is contains the styling of the app
  <div className ="App">
    <header className="header">
      <div className="logo">
        <span className="title">CHATTER!</span>
      </div>
    </header>
    <div className='messages'>
      {messages.map((msg)=>{
        return <div className='message'> {msg} </div>;
      })}
    </div>
    <TextInput sendMessage={sendMessage}/>
    </div>
  );
}

export default App;
