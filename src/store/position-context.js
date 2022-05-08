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

  // scrollTop + viewport height
  const setHeightHandler = (height) => {
    setHeight(height);
  };

  // clientX
  const setClientXHandler = (x) => {
    setClientX(x);
  };

  // clientY
  const setClientYHandler = (y) => {
    setClientY(y);
  };

  // the position of target block ( a state for anchor tag )
  const setTargetHeightHandler = (height) => {
    setTargetHeight(height);
  };

  // true when jumping through anchor tag, false when not.
  const toggleTargetOnHandler = () => {
    setTargetOn(prev => !prev);
  };

  // will only be true after targetOn has been set to true. ( a state for adjusting slideshow position )
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
