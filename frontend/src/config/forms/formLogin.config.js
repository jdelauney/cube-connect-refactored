export const formLoginConfig = [
  {
    kind: 'title',
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
];
