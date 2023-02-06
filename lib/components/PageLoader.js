import React from "react";

import Typography from "./Typography";
import PropTypes from "prop-types";

import { Neeto } from "@bigbinary/neeto-icons/logos";

const PageLoader = ({ text = "", ...otherProps }) => {
  return (
    <div className="neeto-ui-pageloader__wrapper" {...otherProps}>
      <div className="neeto-ui-pageloader neeto-ui-flex neeto-ui-flex-col neeto-ui-items-center neeto-ui-justify-center">
        <div className="neeto-ui-pageloader__content neeto-ui-flex neeto-ui-flex-shrink-0 neeto-ui-items-center neeto-ui-justify-center">
          <Neeto size={50} className="neeto-ui-pageloader__logo" />
          <div className="neeto-ui-pageloader__spinner">
            <div className="neeto-ui-pageloader__rect1"></div>
            <div className="neeto-ui-pageloader__rect2"></div>
            <div className="neeto-ui-pageloader__rect3"></div>
            <div className="neeto-ui-pageloader__rect4"></div>
            <div className="neeto-ui-pageloader__rect5"></div>
          </div>
        </div>
        {text && (
          <Typography
            style="h5"
            weight="semibold"
            className="neeto-ui-text-gray-500"
          >
            {text}
          </Typography>
        )}
      </div>
    </div>
  );
};

PageLoader.propTypes = {
  /**
   * Text to indicate loading status (optional).
   */
  text: PropTypes.string,
};

export default PageLoader;
