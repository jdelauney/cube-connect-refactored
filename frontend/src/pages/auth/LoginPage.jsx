import { Link, useNavigate } from 'react-router-dom';
import RotatingCube from '../shared/miscs/RotatingCube.jsx';
import LoginForm from './LoginForm.jsx';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth.js';
import { loginUser } from '../../lib/api/api.js';
import { useState } from 'react';

const LoginPage = () => {
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmitHandler = async data => {
    const { email, password } = data;
    const response = await loginUser({ email, password });
    if (response.success) {
      login(response);
      navigate('/groupes');
      reset();
    } else {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className={'-mt-20 flex min-h-full items-center justify-center'}>
      <div className='hidden h-80 w-80 lg:block'>
        <RotatingCube />
      </div>
      <div className='w-full px-4 shadow-lg sm:w-1/2 lg:ml-24 lg:w-1/3'>
        <h1 className='mb-4 text-center text-3xl font-bold text-white'>Connexion</h1>
        {error && <p className='mb-3 rounded bg-red-700 p-2 text-center text-white'>{error}</p>}

        <LoginForm onSubmitHandler={handleSubmit(onSubmitHandler)} register={register} errors={errors} />

        <p className='mt-6 text-center text-sm text-white'>
          Pas encore membre ?&nbsp;
          <Link to='/register' className={'text-sm font-semibold text-gray-300 hover:text-red-600 hover:underline'}>
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
