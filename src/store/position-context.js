import React, { useState } from "react";

const PositionContext = React.createContext({
  height: 0,
  clientX: null,
  clientY: null,
  targetHeight: null,
  targetOn: false,
  slideChange: false,
  setHeight: () => {},
  setClientX: () => {},
  setClientY: () => {},
  setTargetHeight: () => {},
  toggleTargetOn: () => {},
  toggleSlideChange: () => {},
});

export const PositionProvider = ({ children }) => {
  const [height, setHeight] = useState(0);
  const [clientX, setClientX] = useState(null);
  const [clientY, setClientY] = useState(null);
  const [targetHeight, setTargetHeight] = useState(null);
  const [targetOn, setTargetOn] = useState(false);
  const [slideChange, setSlideChange] = useState(false);

  const setHeightHandler = (height) => {
    setHeight(height);
  };

  const setClientXHandler = (x) => {
    setClientX(x);
  };

  const setClientYHandler = (y) => {
    setClientY(y);
  };

  const setTargetHeightHandler = (height) => {
    setTargetHeight(height);
  };

  const toggleTargetOnHandler = () => {
    setTargetOn(prev => !prev);
  };

  const toggleSlideChangeHandler = () => {
    setSlideChange(prev => !prev);
  };

  const context = {
    height,
    clientX,
    clientY,
    targetHeight,
    targetOn,
    slideChange,
    setHeight: setHeightHandler,
    setClientX: setClientXHandler,
    setClientY: setClientYHandler,
    setTargetHeight: setTargetHeightHandler,
    toggleTargetOn: toggleTargetOnHandler,
    toggleSlideChange: toggleSlideChangeHandler,
  };

  return (
    <PositionContext.Provider value={context}>
      {children}
    </PositionContext.Provider>
  );
};

export default PositionContext;
