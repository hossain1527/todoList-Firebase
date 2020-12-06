import React, { useState } from "react";
import firebase from "./firebase";

function AddForm() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("times")
      .add({
        title,
        time_seconds: parseInt(time),
      })
      .then(() => {
        setTitle("");
        setTime("");
      });
  };

  return (
    <form onSubmit={onsubmit}>
      <h4>Add Tasks</h4>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </div>

      <div>
        <label>Duration</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.currentTarget.value)}
        />
      </div>
      <button>Add</button>
    </form>
  );
}

export default AddForm;
