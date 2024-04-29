import { useContext, useEffect } from "react";
import TrafficLightContext from "../context/TrafficLightContext";
import CarLight from "./CarLight";

const CarTrafficLight = () => {
  const { config, carLight, setCarLight } = useContext(TrafficLightContext);
  useEffect(() => {
    const { duration, next } = config[carLight];
    const timerId = setTimeout(() => setCarLight(next), duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [config, carLight]);
  return (
    <div className="traffic-light-container">
      {Object.keys(config).map((color) => (
        <CarLight
          key={color}
          color={color}
          backgroundColor={
            color === carLight ? config[color].backgroundColor : "transparent"
          }
        />
      ))}
    </div>
  );
};

export default CarTrafficLight;
