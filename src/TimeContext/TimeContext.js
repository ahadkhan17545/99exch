import React, { createContext, useState } from 'react';

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [matchTime, setMatchTime] = useState('');

  return (
    <TimeContext.Provider value={{ matchTime, setMatchTime }}>
      {children}
    </TimeContext.Provider>
  );
};
