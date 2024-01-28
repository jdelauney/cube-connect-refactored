import { useToast } from './useToast.js';

export const usePopSessionNotification = () => {
  const { addToast } = useToast();

  const popSessionInvitation = (title, ContentComponent = null) => {
    addToast({ title, ContentComponent });
  };

  return popSessionInvitation;
};
