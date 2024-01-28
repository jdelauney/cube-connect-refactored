import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/Logo.png';
import { NAVIGATION_ROUTES } from '../../../../router/routes.jsx';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const MainPageSidebar = () => {
  const isAuthenticated = false;

  const filteredNavigation = NAVIGATION_ROUTES.filter(item => {
    if (isAuthenticated) {
      return item.name !== 'Connexion' && item.name !== 'Inscription';
    }
    return true;
  });
  return (
    <div className='hidden min-h-screen max-w-72 flex-col border-r border-gray-900 lg:flex'>
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6'>
        <div className='-ml-2 mt-4 flex h-16 w-full items-center'>
          <img src={logo} alt='Your Company' />
        </div>
        <nav className='flex flex-1 flex-col'>
          <ul className='flex flex-1 flex-col gap-y-7'>
            <li>
              <ul className='-mx-2 space-y-8'>
                {filteredNavigation.map(item => (
                  <li key={item.name}>
                    {item.name === 'Connexion' && filteredNavigation.some(navItem => navItem.name === 'Inscription') && (
                      <hr className='my-2 border-t border-gray-700' />
                    )}
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        classNames(
                          isActive ? 'bg-red-600 text-white' : 'text-indigo-200 hover:bg-red-700 hover:text-white',
                          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white'
                        )
                      }
                    >
                      <span className='h-6 w-6 shrink-0' aria-hidden='true'>
                        {item.Icon && item.Icon}
                      </span>
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            {/*{isAuthenticated && user && (
              <>
                <li className='-mx-6 mt-auto'>
                  <Link to='/editprofile' className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-red-700'>
                    <img
                      className='h-8 w-8 rounded-full'
                      src={
                        user.picture
                          ? user.picture
                          : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      }
                      alt=''
                    />
                    <span className='sr-only'>Your profile</span>
                    <span aria-hidden='true'>{user.name}</span>
                  </Link>
                </li>
                <li className='-mx-6'>
                  <button
                    onClick={logout}
                    className='flex w-full cursor-pointer items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-red-700'
                  >
                    <span className='sr-only'>Sign out</span>

                    <span aria-hidden='true' className='flex gap-4'>
                      <ArrowsPointingOutIcon className='h-6 w-6 shrink-0' aria-hidden='true' />
                      Sign out
                    </span>
                  </button>
                </li>
              </>
            )}*/}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default MainPageSidebar;
