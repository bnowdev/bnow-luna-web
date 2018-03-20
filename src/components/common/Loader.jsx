import React from "react";
import { CircularProgress } from "material-ui/Progress";

import "../../styles/Loader.css";

export const Loader = () => (
  <div className="loader__shade">
    <CircularProgress className="loader__spinner" />
  </div>
);

export default Loader;
