import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { User } from "firebase/auth";

import { Spin } from "antd";

export const AuthContext = React.createContext<User | null>(null);

const userTable = "users";

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <Spin
        style={{ margin: "45vh 0", width: "100vw", height: "100vh" }}
        size="large"
      />
    );
  }

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

export function useUser() {
  return React.useContext(AuthContext);
}
