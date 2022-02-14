import { useState } from "react";
import { FiEdit} from "react-icons/fi";
import React from "react";
import "./NamePicker.css";


function NamePicker (props) {
  let [editName, setEditName] = useState(false);
  let [name, setName] = useState("");


function set() {
  props.setUsername(name);
  setEditName(false);
}


if (editName) {
  return (
  <div className="NamePicker">
    <button className="set" onClick={set}>
      Ok
    </button>
    <input className="name-input"
      onChange={(e) => setName(e.target.value)}
      value={name}
    />
  </div>
  );
}
  return (
    <div className="NamePicker">
      <span> {name || "Set Username: "}</span>
      <button className="set" >
        <FiEdit size="24" onClick={()=>setEditName (true)}/>
      </button>
    </div>
  );


}
export default NamePicker;

