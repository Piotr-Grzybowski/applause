import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form.js";
import Result from "./components/Result/Result.js";
import getBugs from "./helpers/getBugs";
import getDevicesAndTesters from "./helpers/getDevicesAndTesters";

function App() {
  const [testers, setTesters] = useState([]);
  const [devices, setDevices] = useState([]);
  const [bugs, setBugs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getDevicesAndTesters(setTesters, setDevices, setError);
  }, []);

  if (!error) {
    return (
      <div className="App">
        <Form
          testers={testers}
          devices={devices}
          getBugs={getBugs}
          setBugs={setBugs}
        />
        <Result bugs={bugs} testers={testers} devices={devices} />
      </div>
    );
  } else {
    return (
      <div>
        <p className="error">{error}</p>
      </div>
    );
  }
}

export default App;
