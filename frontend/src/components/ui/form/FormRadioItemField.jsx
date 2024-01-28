import { capitalize } from '../../../lib/utils/stringUtils.js';

const FormRadioItemField = ({ groupName, name, register, options }) => {
  return (
    <label className='mr-6 inline-flex items-center'>
      <input type='radio' {...register(groupName, { ...options })} value={name} className='form-radio text-indigo-600' />
      <span className='ml-2'>{capitalize(name)}</span>
    </label>
  );
};
export default FormRadioItemField;
