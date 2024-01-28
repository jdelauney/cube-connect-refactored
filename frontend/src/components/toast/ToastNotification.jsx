import { XMarkIcon } from '@heroicons/react/20/solid';
import { useToast } from '../../hooks/useToast.js';

const ToastNotification = ({ id, title, ContentComponent }) => {
  const { removeToast } = useToast();
  return (
    <div className={`flex flex-col border border-gray-800 bg-gray-900 text-white shadow`}>
      <div className={'flex items-center justify-between p-2'}>
        <span className={'text-md font-bold'}>{title}</span>
        <button onClick={() => removeToast(id)}>
          <XMarkIcon className='h-5 w-5' aria-hidden='true' />
        </button>
      </div>
      <div className={'p-2'}>{ContentComponent}</div>
    </div>
  );
};

export default ToastNotification;
