import { createContext } from 'react';

const Level = createContext({
  exp: 0,
  setExp: () => {},
});

export default Level;
