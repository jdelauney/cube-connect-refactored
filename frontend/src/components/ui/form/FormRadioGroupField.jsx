import FormRadioItemField from './FormRadioItemField.jsx';

const FormRadioGroupField = ({ radioItems, groupName, labelName, className, register, hasError, errorMessage }) => {
  return (
    <div className={className}>
      <span className={'block text-sm font-medium leading-6 text-white'}>{labelName}</span>
      <div className={'mt-2'}>
        {radioItems.map(item => (
          <FormRadioItemField key={`${groupName}-${item.name}`} name={item.name} groupName={groupName} register={register} />
        ))}
      </div>
      {hasError && <span className={'text-red-500'}>{errorMessage}</span>}
    </div>
  );
};
export default FormRadioGroupField;
