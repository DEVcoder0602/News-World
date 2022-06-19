import "../components/Css/editor.css";
import { useState } from "react";

export const Editor = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  // const [allEntry, setAllEntry] = useState([]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="editor">
      <div className="left">
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" onChange={emailHandler}/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={textHandler}></textarea>
</div>
      </div>

<div className="right">

<h3>Your email:</h3>
<p>{email}</p>

<h3>Your Text:</h3>
<p>{text}</p>
</div>
    </div>
  );
};
