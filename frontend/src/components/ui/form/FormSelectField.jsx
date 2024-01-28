const FormSelectField = ({ id, selectItems, labelName, defaultValue, className, onChange }) => {
  const onChangeHandler = event => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <div className={className}>
      <span className='block text-sm font-medium leading-6 text-white'>{labelName}</span>
      <select id={id} value={defaultValue} onChange={onChangeHandler} className='w-40 border border-white bg-black text-white'>
        {selectItems.map(item => (
          <option key={`${labelName}-${item.label}`} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default FormSelectField;
