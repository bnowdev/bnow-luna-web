import React, { Fragment } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";
import { withStyles } from "material-ui/styles";
// import Paper from "material-ui/Paper";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import FilterListIcon from "material-ui-icons/FilterList";
import Button from "material-ui/Button";

import Filter from "./Filter";
import Loader from "../common/Loader";
import {AND_QUERY, OR_QUERY, FIELDS} from "../../constants/filterConstants";
//className={classes.heading}


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "50px"
  },
  column: {
    display: "flex",
    flexDirection: "column"
  },
  details: {
    paddingTop: "0px"
  },
  list: {
    display: "flex",
    flexDirection: "column"
  },
  buttons: {
    display: "flex",
    marginTop: "20px",
    marginBottom: "20px"
  },
  button: {
    marginRight: "10px"
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular
    wordSpacing: "10px"
  }
  // divider: {
  //  // width: "100%",
  //   marginBottom: "20px"
  // }
});

const FilterList = ({
  classes,
  filters,
  onFieldChange,
  onOperatorChange,
  onValueChange,
  onAddFilter,
  onRemoveFilter,
  onClearFilters,
  onRunFilters
}) => {
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<FilterListIcon />}>
          <Typography variant="title" className={classes.heading}>
            Filters {filters.length > 0 ? ` : ${filters.length}` : null}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          className={classNames(classes.column, classes.details)}
        >
          <Divider />
          <div className={classes.buttons}>
            <Button
              variant="raised"
              color="primary"
              className={classes.button}
              onClick={onAddFilter(AND_QUERY)}
            >
              AND FILTER
            </Button>
            <Button
              variant="raised"
              color="primary"
              className={classes.button}
              onClick={onAddFilter(OR_QUERY)}
            >
              OR FILTER
            </Button>
            <Button
              variant="raised"
              color="secondary"
              className={classes.button}
              onClick={onRunFilters}
            >
              RUN
            </Button>
            <Button
              variant="raised"
              color="secondary"
              className={classes.button}
              onClick={onClearFilters}
            >
              CLEAR
            </Button>
          </div>
          <div className={classes.list}>
            {filters.map((filter,index) => {
              if(index === 0){
                return(
                  <Fragment key={filter.id}>
                    <Filter
                      filter={filter}
                      onFieldChange={onFieldChange}
                      onOperatorChange={onOperatorChange}
                      onValueChange={onValueChange}
                      // onAddFilter={onAddFilter}
                      onRemoveFilter={onRemoveFilter}
                      // onClearFilters={onClearFilters}
                    />
                  </Fragment>
                )
              }
               else return (
                <Fragment key={filter.id}>
                  {filter.queryType === OR_QUERY ? filter.queryType :  null}
                  <Filter
                    filter={filter}
                    onFieldChange={onFieldChange}
                    onOperatorChange={onOperatorChange}
                    onValueChange={onValueChange}
                    // onAddFilter={onAddFilter}
                    onRemoveFilter={onRemoveFilter}
                    // onClearFilters={onClearFilters}
                  />
                </Fragment>
              );
            })}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

FilterList.propTypes = {
  filters: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onOperatorChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onAddFilter: PropTypes.func.isRequired,
  onRemoveFilter: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  onRunFilters: PropTypes.func.isRequired,

};

export default withStyles(styles)(FilterList);
