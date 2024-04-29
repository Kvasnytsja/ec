import PedestrianLight from "./PedestrianLight";
import TrafficLightContext from "../context/TrafficLightContext";
import { useContext, useEffect } from "react";

const PedestrianTrafficLight = () => {
  const {
    pedestrianConfig,
    currentColor,
    setCurrentColor,
    handlePedestrianLightChange,
    isButtonDisabled,
  } = useContext(TrafficLightContext);
  useEffect(() => {
    const { duration, next } = pedestrianConfig[currentColor];
    const timerId = setTimeout(() => setCurrentColor(next), duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [pedestrianConfig, currentColor]);
  return (
    <>
      <div className="traffic-light-container">
        {Object.keys(pedestrianConfig).map((color) => (
          <PedestrianLight
            key={color}
            color={color}
            backgroundColor={
              color === currentColor
                ? pedestrianConfig[color].backgroundColor
                : "transparent"
            }
          />
        ))}
      </div>
      <div className="button">
        <button
          className={`btn ${isButtonDisabled ? "disabled" : ""}`}
          onClick={handlePedestrianLightChange}
          disabled={isButtonDisabled}
        >
          Change Pedestrian Light
        </button>
      </div>
    </>
  );
};

export default PedestrianTrafficLight;
