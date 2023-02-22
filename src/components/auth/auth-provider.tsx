import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { User } from "firebase/auth";
import { Spin } from "antd";

const AuthContext = React.createContext<User | null>(null);

const userTable = "users";

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
      setPending(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {pending ? (
        <Spin
          style={{ margin: "45vh 0", width: "100vw", height: "100vh" }}
          size="large"
        />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export function useUser() {
  const currentUser = useContext(AuthContext);
  return currentUser;
}
