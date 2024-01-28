import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  //console.error(error);
  return (
    <div id='error-page' className={'flex h-screen w-full items-center justify-center'}>
      <div className={'flex flex-col items-center'}>
        <h1 className={'mb-3 text-xl'}>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className={'mt-2'}>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};
export default NotFound;
