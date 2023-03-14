import { createContext, useState } from 'react';

// 실제 접근하고 싶은 값
export const UserContext = createContext({
  currentUser: null,
  // 기본 함수
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
