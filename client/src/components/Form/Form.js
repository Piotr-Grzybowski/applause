import PropTypes from 'prop-types';
import React from "react";
import Select from "react-select";
import { useState } from "react";

function Form({ countries, devices, getBugs, setBugs }) {
  const [selectedDevices, setSelectedDevices] = useState("");
  const [selectedCountries, setSelectedCountries] = useState("");
  const optionsForDevices = devices.map((element) => {
    return {
      value: element.deviceId,
      label: element.description,
    };
  });
  const optionsForCountries = countries.map((element) => {
    return {
      value: element.id,
      label: element.country,
    };
  });
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
          classNamePrefix="select "
          options={optionsForDevices}
          selectValue={selectedDevices}
          onChange={(values) => {
            setSelectedDevices(values.map(value => {
              return Object.values(value)[0];
            }).join(','));
          }}
        />
        <Select
          isMulti
          name="countries"
          className="basic-multi-select"
          classNamePrefix="select "
          options={optionsForCountries}
          selectValue={selectedCountries}
          onChange={(values) => {
            setSelectedCountries(values.map(value => {
              return Object.values(value)[0];
            }).join(','));
            console.log(values);
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
