import { useState } from "react";
import { FiEdit} from "react-icons/fi";
import React from "react";
import "./NamePicker.css";


function NamePicker (props) {
  let [editName, setEditName] = useState(false);
  let [name, setName] = useState("Set a username: ");


function set() {
  props.set(name);
  setEditName(false);
}
function onKeyPress(e){
  if(e.key ==='Enter') {
    set();
  }
}

if (editName) {
  return  <div className="NamePicker">
    <button className="set" onClick={set}>
      Ok
    </button>
    <input className="name-input"
      value={name}
      onChange={(e) => setName(e.target.value)}
      onKeyPress={onKeyPress}
    />
</div>
}  else {
    return  <div className="NamePicker">
    {name}
    <button className="set" onClick={()=>setEditName (true)}>
      <FiEdit/>
    </button>
</div>
}


}
export default NamePicker;

