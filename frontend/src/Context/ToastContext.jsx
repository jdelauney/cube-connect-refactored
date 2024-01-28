import { createContext, useCallback, useState } from 'react';
import ToastNotification from '../components/toast/ToastNotification.jsx';
// Composant pour afficher une notification individuelle

export const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addToast = useCallback(notification => {
    setNotifications(prev => [...prev, { ...notification, id: Date.now() }]);
  }, []);

  const removeToast = useCallback(id => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className='toast-container'>
        {notifications.map(notification => (
          <ToastNotification key={`toast-${notification.id}`} {...notification} removeToast={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
