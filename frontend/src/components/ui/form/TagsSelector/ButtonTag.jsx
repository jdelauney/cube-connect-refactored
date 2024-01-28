import { cn } from '../../../../lib/utils/cn.js';

const ButtonTag = ({ tagName, collectionName, selected, onClick }) => {
  return (
    <button
      type='button'
      onClick={() => onClick(collectionName, tagName)}
      className={cn('rounded-full px-3 py-1 text-sm font-semibold', selected ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-800')}
    >
      {tagName}
    </button>
  );
};
export default ButtonTag;
