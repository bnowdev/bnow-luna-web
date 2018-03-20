import React from "react";
import PropTypes from "prop-types";

import List, { ListItem, ListItemText } from "material-ui/List";

import { ALERT_MODAL } from "../../constants/modalConstants";

const ModalBody = ({ selectedTab, content, type }) => {
  if (type !== ALERT_MODAL) {
    return <div>No matching modal type</div>;
  }

  const alert = content;

  switch (selectedTab) {
    case 0:
      return (
        <List>
          <ListItem>
            <ListItemText primary="Source: " />
            <ListItemText secondary={alert.source} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Severity: " />
            <ListItemText secondary={alert.severity} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Generated at: " />
            <ListItemText secondary={alert.timeGenerated} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Description: " />
          </ListItem>
          <ListItem>
            <ListItemText secondary={alert.description} />
          </ListItem>
        </List>
      );
    case 1:
      return (
        <List>
          <ListItem>
            <ListItemText primary="Text: " />
          </ListItem>
          <ListItem>
            <ListItemText secondary={alert.alertConclusion.text} />
          </ListItem>
        </List>
      );
    case 2:
      return (
        <List>
          <ListItem>
            <ListItemText primary="Text: " />
          </ListItem>
          <ListItem>
            <ListItemText secondary={alert.alertSolution.text} />
          </ListItem>
        </List>
      );
    case 3:
      return (
        <List>
          <ListItem>
            <ListItemText primary="Text: " />
          </ListItem>
          <ListItem>
            <ListItemText secondary={alert.alertExplanation.text} />
          </ListItem>
        </List>
      );
    default:
      return "No tab correponding tab number";
  }
};

ModalBody.propTypes = {
  selectedTab: PropTypes.number.isRequired,
  content: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default ModalBody;
