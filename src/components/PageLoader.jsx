import React from "react";

import { Neeto } from "neetoicons/logos";
import PropTypes from "prop-types";

import Typography from "./Typography";

const PageLoader = ({ text = "", ...otherProps }) => (
  <div className="neeto-ui-pageloader__wrapper" {...otherProps}>
    <div className="neeto-ui-pageloader neeto-ui-flex neeto-ui-flex-col neeto-ui-items-center neeto-ui-justify-center">
      <div className="neeto-ui-pageloader__content neeto-ui-flex neeto-ui-flex-shrink-0 neeto-ui-items-center neeto-ui-justify-center">
        <Neeto className="neeto-ui-pageloader__logo" size={50} />
        <div className="neeto-ui-pageloader__spinner">
          <div className="neeto-ui-pageloader__rect1" />
          <div className="neeto-ui-pageloader__rect2" />
          <div className="neeto-ui-pageloader__rect3" />
          <div className="neeto-ui-pageloader__rect4" />
          <div className="neeto-ui-pageloader__rect5" />
        </div>
      </div>
      {text && (
        <Typography style="h5" weight="semibold">
          {text}
        </Typography>
      )}
    </div>
  </div>
);

PageLoader.propTypes = {
  /**
   * Text to indicate loading status (optional).
   */
  text: PropTypes.string,
};

export default PageLoader;
