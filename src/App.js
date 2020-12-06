import "./App.css";
import TimesList from "./TimesList";
import AddForm from "./AddForm";

import firebase from "./firebase";

// Test whether can sync with the Firebase database

firebase.firestore().collection("times").add({
  title: "",
  time_seconds: "",
});

function App() {
  return (
    <div className="App">
      <h1>To do List based on Firebase</h1>
      <TimesList />
      <AddForm />
    </div>
  );
}

export default App;
