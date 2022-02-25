import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form.js';
import Result from './components/Result/Result.js';
import getBugs from './helpers/getBugs';
import getDevicesAndCountries from './helpers/getDevicesAndTesters';

function App() {
  const [countries, setCountries] = useState([]);
  const [devices, setDevices] = useState([]);
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    getDevicesAndCountries(setCountries, setDevices);
  }, []);

  return (
    <div className="App">
      <Form countries={countries} devices={devices} getBugs={getBugs} setBugs={setBugs} />
      <Result bugs={bugs} countries={countries} devices={devices} />
    </div>
  );
}

export default App;



