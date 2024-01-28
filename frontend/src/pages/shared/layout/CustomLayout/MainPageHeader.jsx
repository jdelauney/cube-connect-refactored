const MainPageHeader = () => {
  return (
    <div className='sticky top-0 z-40 flex items-center justify-between gap-x-6 bg-black px-4 py-4 shadow-sm sm:px-6 lg:hidden'>
      <button type='button' className='-m-2.5 p-2.5 text-indigo-200 lg:hidden'>
        <span className='sr-only'>Open sidebar</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          aria-hidden='true'
          data-slot='icon'
          className='h-6 w-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'></path>
        </svg>
      </button>
    </div>
  );
};
export default MainPageHeader;
