import PropTypes from "prop-types";
import { useContext } from "react";
import TrafficLightContext from "../context/TrafficLightContext";

const PedestrianLight = ({ color }) => {
  const { pedestrianConfig, currentColor } = useContext(TrafficLightContext);
  const bg = currentColor === color ? pedestrianConfig[color].backgroundColor : "gray";
  return (
    <div
      className="traffic-light"
      style={{
        backgroundColor: bg,
      }}
    />
  );
};

PedestrianLight.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default PedestrianLight;
