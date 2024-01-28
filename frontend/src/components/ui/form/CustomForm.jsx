import FormInputField from './FormInputField.jsx';
import FormSelectField from './FormSelectField.jsx';
import TagsSelector from './TagsSelector/TagsSelector.jsx';

const CustomForm = ({ formFields, onSubmitHandler, register, errors, children }) => {
  return (
    <form onSubmit={onSubmitHandler} className='form'>
      {formFields.map(field => {
        switch (field.type) {
          case 'input':
            return (
              <FormInputField
                key={field.name}
                register={register}
                name={field.name}
                options={field.options}
                defaultValue={field.defaultValue}
                hasError={errors[field.name]}
                errorMessage={field.errorMessage}
              />
            );
          case 'select':
            return (
              <FormSelectField
                key={field.name}
                register={register}
                name={field.name}
                options={field.values}
                defaultValue={field.defaultValue}
                hasError={errors[field.name]}
                errorMessage={field.errorMessage}
                onChange={field.onChange}
              />
            );
          case 'tagSelector':
            return <TagsSelector titleLabel={field.label} data={field.values} collectionName={field.name} toggleTagHandler={field.onClick} />;
          default:
            return null;
        }
      })}
      {children}
    </form>
  );
};
export default CustomForm;
