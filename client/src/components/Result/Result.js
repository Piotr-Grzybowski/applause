import * as React from "react";
import PropTypes from "prop-types";
import "./Result.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { getFullName, getDeviceName, getTotalAmountOfBugs } from '../../helpers/utilsForResult';

export default function Result({ bugs, testers, devices }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = (testerId) => {
    open === testerId ? setOpen(0) : setOpen(testerId);
  };
  if (bugs.length > 0 && testers.length > 0 && typeof bugs !== "string") {
    return (
      <div id="list-main">
        <List
          className="list"
          sx={{
            backgroundColor: "rgba(72,72,72,0.4)",
            width: "450px",
            padding: "35px",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {bugs.map((element) => {
            return (
              <div key={element.testerId} className="listItem">
                <ListItemButton
                  key={element.testerId}
                  onClick={() => handleClick(element.testerId)}
                  sx={{ backgroundColor: "rgba(72,72,72,0.5)" }}
                >
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${getFullName(testers, element.testerId)} filed ${getTotalAmountOfBugs(element.devices)} bugs`}
                  />
                  {open === element.testerId ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {element.devices.map((device) => {
                  return (
                    <Collapse
                      key={device.deviceId}
                      in={open === element.testerId}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        <ListItemButton
                          sx={{
                            pl: 4,
                            backgroundColor: "rgba(255, 255, 255,0.2)",
                          }}
                        >
                          <ListItemIcon>
                            <MobileScreenShareIcon />
                          </ListItemIcon>
                          <ListItemText
                            key={device.deviceId}
                            primary={`${
                              device.count
                            } bugs for ${getDeviceName(
                              devices,
                              device.deviceId
                            )}`}
                          />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  );
                })}
              </div>
            );
          })}
        </List>
      </div>
    );
  } else if (typeof bugs === "string") return <p>{bugs}</p>;
  else return <p></p>;
}

Result.propTypes = {
  bugs: PropTypes.array || PropTypes.string,
  testers: PropTypes.array,
  devices: PropTypes.array
};