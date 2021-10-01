import React from "react";
import PropTypes from "prop-types";
import { BeatLoader } from "react-spinners";

const PageLoader = ({ text = null, color = "#252f3f", ...otherProps }) => {
  return (
    <div className="neeto-ui-pageloader__wrapper" {...otherProps}>
      <div className="neeto-ui-pageloader">
        {text && <h2 className="neeto-ui-pageloader__text">{text}</h2>}
        <BeatLoader size={16} color={color} />
      </div>
    </div>
  );
};

PageLoader.propTypes = {
  /**
   * Text to indicate loading status (optional).
   */
  text: PropTypes.string,
  /**
   * A valid HTML color in which loading component should be rendered. Example: “red”, “#232486”
   */
  color: PropTypes.string,
};

export default PageLoader;
