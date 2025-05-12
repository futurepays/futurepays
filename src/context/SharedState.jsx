import React, { useState } from "react";
import SharedContext from "./SharedContext";

const SharedState = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SharedContext.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </SharedContext.Provider>
  );
};

export default SharedState;
