import CustomForm from '../../components/ui/form/CustomForm.jsx';
import { formLoginConfig } from '../../config/forms/formLogin.config.js';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button/Button.jsx';

const LoginForm = ({ onSubmitHandler, register, errors }) => {
  return (
    <CustomForm formFields={formLoginConfig} onSubmitHandler={onSubmitHandler} register={register} errors={errors}>
      <div className='flex'>
        <Link to='#' className={'text-sm font-semibold text-gray-300 hover:text-red-600 hover:underline'}>
          Mot de passe oublié ?
        </Link>
      </div>
      <Button type={'submit'} variant={'danger'} className={'w-full'}>
        Se connecter
      </Button>
    </CustomForm>
  );
};
export default LoginForm;
