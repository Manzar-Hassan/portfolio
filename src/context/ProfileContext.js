import { createContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ProfileContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
