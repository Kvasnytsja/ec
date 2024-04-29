import PropTypes from "prop-types";
import { useContext } from "react";
import TrafficLightContext from "../context/TrafficLightContext";

const CarLight = ({ color }) => {
  const { config, carLight } = useContext(TrafficLightContext);
  const bg = carLight === color ? config[color].backgroundColor : "gray";
  return (
    <div
      className="traffic-light"
      style={{
        backgroundColor: bg,
      }}
    />
  );
};

CarLight.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default CarLight;
