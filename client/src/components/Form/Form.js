import PropTypes from 'prop-types';
import React from "react";
import { useState } from "react";
import Select from 'react-select';
import testersToCountries from '../../helpers/testersToCountries';

function Form({ testers, devices, getBugs, setBugs }) {
  const [selectedDevices, setSelectedDevices] = useState("");
  const [selectedCountries, setSelectedCountries] = useState("");
  const optionsForDevices = devices.map((element) => {
    return {
      value: element.deviceId,
      label: element.description,
    };
  });
  const optionsForCountries = testersToCountries(testers).map((element) => {
    return {
      value: element.value,
      label: element.country,
    };
  });
  const setValue = (values, setNewValue) => {
    setNewValue(values.map(value => {
      return Object.values(value)[0];
    }).join(','));
  };
  return (
    <div className="container">
      <form
        id="Form"
        onSubmit={(event) => {
          event.preventDefault();
          getBugs(selectedCountries, selectedDevices, setBugs);
        }}
      >
        <h1>Get Testers experience</h1>
        <Select
          isMulti
          name="devices"
          className="basic-multi-select"
          placeholder="All Devices"
          options={optionsForDevices}
          selectValue={selectedDevices}
          onChange={(values) => {
            setValue(values, setSelectedDevices);
          }}
        />
        <Select
          isMulti
          name="countries"
          className="basic-multi-select"
          placeholder="All Countries"
          options={optionsForCountries}
          selectValue={selectedCountries}
          onChange={(values) => {
            setValue(values, setSelectedCountries);
          }}
        />
        <button type="submit">Check</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  countries: PropTypes.array,
  devices: PropTypes.array,
  getBugs: PropTypes.func,
  setBugs: PropTypes.func
}

export default Form;
