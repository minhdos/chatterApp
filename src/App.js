import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput';
import {useState} from "react";
import Message from './Message';


function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    // console.log("MY Message", msg)
    const newMessage = {
      text,
      time: Date.now(),
      user: "Minh",
    };
    setMessages([newMessage, ...messages]);
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
      {messages.map((msg)=> {
        return <Message {...msg} />;
      })}
    </div>
    <TextInput sendMessage={sendMessage}/>
    </div>
  );
}

export default App;
