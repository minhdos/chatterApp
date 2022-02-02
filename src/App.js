import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput';
import {useState} from "react";
import Message from './Message';
import { FiSend} from "react-icons/fi";
import Camera from 'react-snap-pic';

// This connects other components into one app
function App() {
  let [showCamera, setShowCamera] = useState(false);
  let [messages, setMessages] = useState([]);
  // "sendMessage" runs whenever we click the send button
  function sendMessage(text) {
    if (!text) return;
    // console.log("MY Message", msg)
    // create new mssg object
    const newMessage = {
      text: text,
      time: Date.now(),
      user: "Minh",
    };

    // set the "messages" to be  a new array
    // that has new and old mssgs
    setMessages([newMessage, ...messages]);
  }

  function takePicture (img)  {
    console.log(img)
    setShowCamera(false)
  }

  console.log(messages);

  // return HTML
  return (
  // this is contains the styling of the app
  <div className ="App">
    {showCamera && <Camera takePicture={takePicture} />}
    <header className="header">
      <div className="logo">
        <span className="title">ChatterApp!</span>
      </div>
    </header>
    <div className='messages'>
      {messages.map((msg, i)=> {
        // loop over every message in the array
        // return a Message component
        // "key" needs to be a unique value for each item
        return <Message {...msg} key={i} />;
      })}

    </div>
      {/* the sendMessage prop on textInput = the sendMessage function */}
    <TextInput sendMessage={sendMessage} showCamera={()=>setShowCamera(true)}/>
    </div>
  );
}

export default App;
