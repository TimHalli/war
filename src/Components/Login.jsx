import React, { useState } from "react";

export default function Login(props) {
  const [name, setName] = useState("");

  const valid = () => {
    if (name === "") {
      alert("enter your name");
    } else {
      props.addName(name, "Computer");
    }
  };

  return (
    <div style={{ marginTop: 100 }}>
      <h1>Ready for WAR</h1>
      <form action='submit'>
        <input
          className='col-form-label mt-2'
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
          type='text'
        />

        <br />
        <button type='submit' className='btn btn-lg btn-primary mt-3' onClick={() => valid()}>
          START
        </button>
      </form>
    </div>
  );
}
