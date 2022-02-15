import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput';
import {useState} from "react";
import Message from './Message';
import { FiSend} from "react-icons/fi";
import Camera from 'react-snap-pic';
import NamePicker from './NamePicker';
import {useDB, db} from "./db"
import { use100vh } from "react-div-100vh";


// This connects other components into one app
function App() {
  const height = use100vh();

  const messages = useDB();

  let [showCamera, setShowCamera] = useState(false);
  let [username, setUsername] = useState("");
  // "sendMessage" runs whenever we click the send butto
  function sendMessage(text) {
    if (!text.trim()) return;
    // console.log("MY Message", msg)
    // create new mssg object
    const newMessage = {
      text: text,
      time: Date.now(),
      user: username,
    };
    // set the "messages" to be  a new array
    // that has new and old mssgs
    db.send(newMessage);
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
      <div className='name'>
        <NamePicker setUsername={setUsername}/>
      </div>
    </header>
    <div className='messages'>
      {messages.map((msg, i)=> {
        // loop over every message in the array
        // return a Message component
        // "key" needs to be a unique value for each item
        return <Message {...msg} key={i} fromMe={msg.user === username}/>;
      })}

    </div>
      {/* the sendMessage prop on textInput = the sendMessage function */}
    <TextInput sendMessage={sendMessage} showCamera={()=>setShowCamera(true)}/>
    </div>
  );
}

export default App;
