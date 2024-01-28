import ButtonTag from './ButtonTag.jsx';

const TagsSelector = ({ titleLabel, data, collectionName, toggleTagHandler, className }) => {
  return (
    <div className={className}>
      <h3>{titleLabel}</h3>
      <div className='flex flex-wrap gap-2'>
        {data.map((type, index) => (
          <ButtonTag
            key={`${collectionName}-${index}`}
            tagName={type.name}
            collectionName={collectionName}
            selected={data.includes(type.name)}
            onClick={toggleTagHandler}
          />
        ))}
      </div>
    </div>
  );
};
export default TagsSelector;
