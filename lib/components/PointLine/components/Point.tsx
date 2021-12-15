import * as React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { _innerContainer, _outerContainer } from "./Point.style";

const Point = (props) => {
  const {
    pointShadowColor,
    pointBackgroundColor,
    outerContainerBorderColor,
    outerContainerBackgroundColor,
  } = props;
  return (
    <View style={_innerContainer(pointBackgroundColor, pointShadowColor)}>
      <View
        style={_outerContainer(
          outerContainerBorderColor,
          outerContainerBackgroundColor,
        )}
      />
    </View>
  );
};

Point.propTypes = {
  pointShadowColor: PropTypes.string,
  pointBackgroundColor: PropTypes.string,
  outerContainerBorderColor: PropTypes.string,
  outerContainerBackgroundColor: PropTypes.string,
};

Point.defaultProps = {
  pointShadowColor: "#1B1047",
  pointBackgroundColor: "#1B1047",
  outerContainerBorderColor: "rgba(27, 16, 71, 0.1)",
  outerContainerBackgroundColor: "rgba(27, 16, 71, 0.05)",
};

export default Point;
