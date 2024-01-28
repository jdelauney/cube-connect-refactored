const FormInputField = ({ name, type, placeholder, register, options, hasError, errorMessage }) => {
  return (
    <div>
      <label htmlFor={name} className={'mb-2 font-semibold text-white'}>
        {name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, options)}
        className={'rounded-md border-none bg-white px-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500'}
      />
      {hasError && <span>{errorMessage}</span>}
    </div>
  );
};
export default FormInputField;
