import App from '../App.jsx';
import NotFoundPage from '../pages/notFound/NotFoundPage.jsx';
import { CogIcon, HomeIcon, MapPinIcon, QuestionMarkCircleIcon, UserIcon, UserPlusIcon, UsersIcon } from '@heroicons/react/24/outline';
import HomePage from '../pages/home/HomePage.jsx';
import RegisterPage from '../pages/auth/RegisterPage.jsx';
import LoginPage from '../pages/auth/LoginPage.jsx';

export const NAVIGATION_ROUTES = [
  { name: 'Accueil', to: '/', Icon: <HomeIcon /> },
  { name: 'Les Groupes', to: '/groupes', Icon: <UsersIcon /> },
  { name: 'Map', to: '/map', Icon: <MapPinIcon /> },
  { name: 'Créer ton équipe', to: '/groupes/admin', Icon: <UsersIcon /> },
  { name: 'Assistance', to: '/assistance', Icon: <QuestionMarkCircleIcon /> },
  { name: 'Paramètres', to: '/parametres', Icon: <CogIcon /> },
  { name: 'Connexion', to: '/connexion', Icon: <UserIcon /> },
  { name: 'Inscription', to: '/inscription', Icon: <UserPlusIcon /> },
];

export const ROUTES = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/inscription',
        element: <RegisterPage />,
      },
      {
        path: '/connexion',
        element: <LoginPage />,
      },
      /*      {
        path: '/groupes',
        element: <App />,
      },
      {
        path: '/map',
        element: <App />,
      },
      {
        path: '/groupe/admin',
        element: <App />,
      },
      {
        path: '/assistance',
        element: <App />,
      },
      {
        path: '/parametres',
        element: <App />,
      },
      {
        path: '/connexion',
        element: <App />,
      },
      */
    ],
  },
];
