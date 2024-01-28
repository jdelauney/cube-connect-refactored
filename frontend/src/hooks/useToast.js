import { useContext } from 'react';
import { ToastContext } from '../Context/ToastContext.jsx';
// Ajustez le chemin d'accès selon l'emplacement de ToastProvider

export const useToast = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToast doit être utilisé à l'intérieur d'un ToastProvider");
  }

  return context;
};
