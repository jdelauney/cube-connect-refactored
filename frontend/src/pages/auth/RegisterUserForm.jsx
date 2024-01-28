import CustomForm from '../../components/ui/form/CustomForm.jsx';
import Button from '../../components/ui/Button/Button.jsx';
import useSWR from 'swr';
import { getFormUserRegisterConfig } from '../../config/forms/formUserRegister.config.js';
import { languages, skillLevels } from '../../enums/userDataProfil.js';
import { getCities, getCommunityTypes, getGameGenres, getGameModes, getGamePlatforms } from '../../lib/api/api.js';
import { useRegisterUserFormContext } from './Contexte/RegisterUserFormContext.jsx';

const RegisterUserForm = ({ onSubmitHandler, register, errors }) => {
  const { data: cities } = useSWR(() => getCities());
  const { data: gameGenres } = useSWR(() => getGameGenres());
  const { data: gameModes } = useSWR(() => getGameModes());
  const { data: gamePlatforms } = useSWR(() => getGamePlatforms());
  const { data: communityTypes } = useSWR(() => getCommunityTypes());

  const { toggleTagHandler, selectOnChangeHandler } = useRegisterUserFormContext();

  let userRegisterFormConfig;

  if (!cities || !gameGenres || !gameModes || !gamePlatforms || !communityTypes) {
    return <div>Loading...</div>;
  } else {
    userRegisterFormConfig = getFormUserRegisterConfig(
      cities,
      communityTypes,
      gameGenres,
      gameModes,
      gamePlatforms,
      languages,
      skillLevels,
      toggleTagHandler,
      selectOnChangeHandler
    );
  }

  return (
    <CustomForm formFields={userRegisterFormConfig} onSubmitHandler={onSubmitHandler} register={register} errors={errors}>
      <div className='flex'>
        <Button type={'submit'} variant={'danger'} className={'w-full'}>
          S'enregistrer
        </Button>
      </div>
    </CustomForm>
  );
};
export default RegisterUserForm;
