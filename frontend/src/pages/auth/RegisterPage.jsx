import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../lib/api/api.js';
import RegisterUserForm from './RegisterUserForm.jsx';
import { RegisterUserFormProvider } from './Contexte/RegisterUserFormContext.jsx';

const RegisterPage = () => {
  const [selectedPreferences, setSelectedPreferences] = useState({
    gameGenres: [],
    gameModes: [],
    gamePlatforms: [],
    communityTypes: [],
    skillLevels: [],
    languages: [],
  });
  const [selectedCity, setSelectedCity] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onChangeCityHandler = value => {
    setSelectedCity(value);
  };

  const toggleTag = (category, name) => {
    setSelectedPreferences(prev => {
      if (category === 'skillLevels') {
        return { ...prev, [category]: [name] };
      } else {
        return {
          ...prev,
          [category]: prev[category].includes(name) ? prev[category].filter(item => item !== name) : [...prev[category], name],
        };
      }
    });
  };

  const onSubmitHandler = async data => {
    const userData = {
      first_name: data.firstName,
      last_name: data.lastName,
      gender: data.gender,
      username: data.username,
      email: data.email,
      password: data.password,
      city_id: Number(selectedCity),
      profile_picture: data.profilePicture,
      preferences: selectedPreferences,
    };

    const result = await registerUser(userData);

    if (result.success) {
      setSelectedPreferences({
        gameGenres: [],
        gameModes: [],
        gamePlatforms: [],
        communityTypes: [],
        skillLevels: [],
        languages: [],
      });
      setSelectedCity('');
      reset();
      navigate('/');
    } else {
      throw new Error(`Registration error: ${result.message}`);
    }
  };

  return (
    <RegisterUserFormProvider toggleTag={toggleTag} onChangeCityHandler={onChangeCityHandler}>
      <div className='container mx-auto p-4'>
        <RegisterUserForm onSubmitHandler={handleSubmit(onSubmitHandler)} register={register} errors={errors} />
      </div>
    </RegisterUserFormProvider>
  );
};
export default RegisterPage;
