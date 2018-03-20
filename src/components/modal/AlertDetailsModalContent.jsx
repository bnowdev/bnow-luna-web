import React from "react";
import PropTypes from "prop-types";

import List, { ListItem, ListItemText } from "material-ui/List";

const AlertDetailsModalContent = props => {
  const { selectedTab, alert } = props;

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

const genericContent = ({text}) => (
  <List>
    <ListItem>
      <ListItemText primary="Text: " />
    </ListItem>
    <ListItem>
      <ListItemText secondary={text} />
    </ListItem>
  </List>
);

AlertDetailsModalContent.propTypes = {
  selectedTab: PropTypes.number.isRequired,
  alert: PropTypes.object.isRequired
};

export default AlertDetailsModalContent;
