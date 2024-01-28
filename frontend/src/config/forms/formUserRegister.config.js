export const getFormUserRegisterConfig = (
  citiesValue,
  gameTypesValues,
  gameModesValues,
  gamePlatformsValues,
  gameLevelsValues,
  languagesValues,
  skillLevelsValues,
  toggleTagHandler,
  onChangeCityHandler
) => {
  return [
    {
      kind: 'input',
      name: 'firstname',
      type: 'text',
      label: 'Prénom',
      placeholder: 'Prénom',
      options: { required: true },
      errorMessage: 'Un prénom est requis',
      defaultValue: '',
    },
    {
      kind: 'input',
      name: 'lastname',
      type: 'text',
      label: 'Nom',
      placeholder: 'Nom',
      options: { required: true },
      errorMessage: 'Un nom est requis',
      defaultValue: '',
    },
    {
      kind: 'radio',
      name: 'gender',
      options: { required: true },
      values: ['homme', 'femme'],
      errorMessage: 'Le genre est requis',
    },
    {
      kind: 'input',
      name: 'username',
      type: 'text',
      label: 'Pseudo',
      placeholder: 'Pseudo',
      options: { required: true },
      errorMessage: 'Un pseudo est requis',
      defaultValue: '',
    },
    {
      kind: 'input',
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Email',
      options: { required: true },
      errorMessage: 'Un Email valide est requis',
      defaultValue: '',
    },
    {
      kind: 'input',
      name: 'password',
      type: 'password',
      label: 'Mot de passe',
      placeholder: 'Password',
      options: { required: true },
      errorMessage: 'Un mot de passe est requis',
      defaultValue: '',
    },
    {
      kind: 'input',
      name: 'passwordConfirmation',
      type: 'password',
      label: 'Confirmation du mot de passe',
      placeholder: 'Password confirmation',
      options: { required: true },
      errorMessage: 'La confirmation du mot de passe est requise',
      defaultValue: '',
    },
    {
      kind: 'input',
      name: 'profilePicture',
      type: 'text',
      label: 'Image de profil',
      placeholder: 'https://www.example.com/avatar.jpg',
      options: {},
      errorMessage: "Une erreur s'est produite pseudo est requis",
      defaultValue: '',
    },

    /*  {
      kind: 'input',
      name: 'birthdate',
      type: 'date',
      label: 'Date de naissance',
      placeholder: 'Date de naissance',
      options: { required: true },
      errorMessage: 'Une date de naissance est requise',
      defaultValue: '',
    },*/
    {
      kind: 'select',
      name: 'city',
      type: 'text',
      label: 'Ville',
      values: citiesValue,
      options: { required: true },
      errorMessage: 'Une ville est requise',
      defaultValue: '',
      onChange: onChangeCityHandler,
    },
    {
      kind: 'tagsSelector',
      name: 'gameTypes',
      label: 'Type de jeux',
      values: gameTypesValues,
      onClick: toggleTagHandler,
    },
    {
      kind: 'tagsSelector',
      name: 'gameModes',
      label: 'Mode de jeux',
      values: gameModesValues,
      onClick: toggleTagHandler,
    },
    {
      kind: 'tagsSelector',
      name: 'gamePlatforms',
      label: 'Type de jeux',
      values: gamePlatformsValues,
      onClick: toggleTagHandler,
    },
    {
      kind: 'tagsSelector',
      name: 'gameLevels',
      label: 'Type de jeux',
      values: gameLevelsValues,
      onClick: toggleTagHandler,
    },
    {
      kind: 'tagsSelector',
      name: 'skillLevels',
      label: 'Type de jeux',
      values: skillLevelsValues,
      onClick: toggleTagHandler,
    },
    {
      kind: 'tagsSelector',
      name: 'languages',
      label: 'Langues parlées',
      values: languagesValues,
      onClick: toggleTagHandler,
    },
  ];
};
