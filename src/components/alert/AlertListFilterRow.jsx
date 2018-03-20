import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { TableCell, TableRow } from "material-ui/Table";
import TextField from "material-ui/TextField";

import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl, FormHelperText } from "material-ui/Form";
import Select from "material-ui/Select";
import Button from "material-ui/Button";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150
  }
});

class AlertListFilterRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: "",
      name: "hai"
    };
  }

  handleFilterFieldChange = () => {};

  handleFilterOperatorChange = () => {};

  handleFilterValueChange = () => {};

  render() {
    const { classes } = this.props;

    return (
      <TableRow>
        <TableCell>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Filter Field</InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>severity</MenuItem>
              <MenuItem value={20}>name</MenuItem>
              <MenuItem value={30}>source</MenuItem>
              <MenuItem value={40}>generated at</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
        <TableCell>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Filter Operator</InputLabel>
            <Select value={this.state.age} onChange={this.handleChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}> is </MenuItem>
              <MenuItem value={20}> is not </MenuItem>
              <MenuItem value={20}> contains </MenuItem>
              <MenuItem value={20}> not contains </MenuItem>
              <MenuItem value={20}> starts with </MenuItem>
              <MenuItem value={30}> ends with </MenuItem>
              <MenuItem value={10}> is less than</MenuItem>
              <MenuItem value={30}> is more than</MenuItem>
              <MenuItem value={10}> is less than</MenuItem>
              <MenuItem value={30}> is more than or equal</MenuItem>
              <MenuItem value={30}> is less than or equal</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
        <TableCell>
          <TextField
            id="name"
            label="Name"
            // className={classes.textField}
            value={this.state.name}
            // onChange={this.handleChange("name")}
            margin="normal"
          />
        </TableCell>
        <TableCell>
          <Button
            variant="raised"
            color="secondary"
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

AlertListFilterRow.propTypes = {};

export default withStyles(styles)(AlertListFilterRow);
