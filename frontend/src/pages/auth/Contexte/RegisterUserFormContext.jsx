import { createContext } from 'react';

export const RegisterUserFormContext = createContext(null);

export const RegisterUserFormProvider = ({ children, toggleTag, onChangeCityHandler }) => {
  return <RegisterUserFormContext.Provider value={{ toggleTag, onChangeCityHandler }}>{children}</RegisterUserFormContext.Provider>;
};
