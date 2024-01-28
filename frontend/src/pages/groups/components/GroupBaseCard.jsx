import { getFormatedRelativeDateTime } from '../../../lib/utils/datetimeUtils.js';

const GroupBaseCard = ({ group, children }) => {
  const parseLanguages = languagesString => {
    const matches = languagesString.match(/[^{}]+(?=\\})/g);
    if (matches && matches[0]) {
      return matches[0].split(',').join(', ');
    }
    return [];
  };

  return (
    <div className='overflow-hidden rounded border border-gray-900 bg-black shadow'>
      <img src={group.group_picture || 'default-image.jpg'} alt={group.group_name} className='mb-2 h-40 w-full rounded object-cover' />
      <div className='p-4'>
        <h2 className='text-2xl font-bold text-white'>{group.group_name}</h2>
        {/* Display languages */}
        <div className='mt-2'>
          {group.languages && group.languages.length > 0 && <p className='text-white'>Languages: {parseLanguages(group.languages)}</p>}
        </div>
        <p className='text-sm text-white'>{getFormatedRelativeDateTime(group.creation_date)}</p>
        <p className='mt-2 text-white'>{group.group_description}</p>
        {children}
      </div>
    </div>
  );
};
export default GroupBaseCard;
