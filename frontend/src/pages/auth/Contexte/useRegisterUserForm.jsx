import { useContext } from 'react';
import { RegisterUserFormContext } from './RegisterUserFormContext.jsx';

export const useRegisterUserFormContext = () => {
  const context = useContext(RegisterUserFormContext);

  if (context === undefined) {
    throw new Error("useRegisterUserFormContext doit être utilisé à l'intérieur d'un RegisterUserFormProvider");
  }

  return context;
};
