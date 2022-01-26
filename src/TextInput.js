import React from "react";
import "./TextInput.css";
import {useState} from "react";

// This allows to componentized text input
function TextInput(props) {
  // const {sendMessage} = props;
  const [text, setText] = useState('')

  function send() {
    props.sendMessage(text);
    setText("");
  }
  function onKeyPress(e){
    if(e.key ==='Enter') {
      send();
    }
  }

  return (
    <footer className="footer">
    <input className="text-input"
    value={text}
    onChange={(e) => setText(e.target.value)}
    onKeyPress={onKeyPress}
    />
    <button className="send" onClick={send}>↑</button>
  </footer>
  );
}

export default TextInput;