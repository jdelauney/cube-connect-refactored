import { createContext, useMemo, useState } from 'react';
import { removeBearerToken, setBearerToken } from '../lib/api/api.js';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: userData => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const storedUser = getBearerToken();
  //   if (storedUser) {
  //     try {
  //       const userData = JSON.parse(storedUser);
  //       setUser(userData);
  //       setIsAuthenticated(true);
  //     } catch (error) {
  //       console.error("Erreur lors de la lecture des données de l'utilisateur:", error);
  //       removeBearerToken();
  //     }
  //   }
  // }, []);

  const login = userData => {
    setIsAuthenticated(true);
    setUser(userData.user);
    setBearerToken(userData.token);
    //console.log('Login réussi:', userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    removeBearerToken();
    //console.log('Utilisateur déconnecté');
  };

  const defaultAuthContextValue = useMemo(
    () => ({
      isAuthenticated: isAuthenticated,
      user: user,
      login: login,
      logout: logout,
    }),
    [isAuthenticated, user]
  );

  return <AuthContext.Provider value={defaultAuthContextValue}>{children}</AuthContext.Provider>;
};
