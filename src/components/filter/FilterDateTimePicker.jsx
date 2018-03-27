import React from "react";
import PropTypes from "prop-types";
import {getCurrentMomentDate} from "../../utils/dateUtils";


import { DateTimePicker } from "material-ui-pickers";

const FilterDateTimePicker = ({ onChange, value }) => {
  return (
    <div className="picker">
      <DateTimePicker
        value={value}
        onChange={onChange}
        ampm={false}
        autoOk
        label="Filter Value"
      />
    </div>
  );
};

FilterDateTimePicker.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

FilterDateTimePicker.defaultProps = {
  value: getCurrentMomentDate()
};

export default FilterDateTimePicker;
