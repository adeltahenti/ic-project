import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ py, color }) => {
  const location = useLocation();

  useEffect(() => {
    const btn = document.querySelector('button.mobile-menu-button');
    const btnClose = document.querySelector('button.mobile-menu-close');
    const menu = document.querySelector('.mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    btnClose.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }, []);

  const closeHandler = () => {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('hidden');
  };

  return (
    <header className={`absolute top-0 left-0 w-full z-10 bg-${color}`}>
      <div
        className={`mx-4 md:w-10/12 lg:w-1/2 md:mx-auto flex items-center justify-between text-white py-${py}`}
      >
        <Link to='/' className='flex flex-col items-center font-lobster'>
          <span className='text-3xl'>Isabelle Cattin</span>
          <span className='text-base'>Photographie</span>
        </Link>
        <div className='md:flex md:flex-row md:items-center md:space-x-3 hidden'>
          <Link
            to='/'
            className={`hover:text-orange-600 hover:font-bold ${
              location.pathname === '/' && 'text-orange-600 font-bold'
            }`}
          >
            Acueil
          </Link>
          <Link
            to='/photos'
            className={`hover:text-orange-600 hover:font-bold ${
              location.pathname === '/photos' && 'text-orange-600 font-bold'
            }`}
          >
            Photos
          </Link>
          <Link
            to='/contact'
            className={`hover:text-orange-600 hover:font-bold ${
              location.pathname === '/contact' && 'text-orange-600 font-bold'
            }`}
          >
            Contact
          </Link>
        </div>
        <div className='md:hidden flex items-center'>
          <button className='mobile-menu-button'>
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
        <div className='mobile-menu hidden md:hidden z-20'>
          <div className='w-3/5 ml-auto h-screen bg-coolgrayplus-400 absolute top-0 right-0 flex flex-col'>
            <div className='text-right p-5'>
              <button className='mobile-menu-close'>
                <i className='fas fa-times text-xl'></i>
              </button>
            </div>
            <Link
              to='/'
              className={`link-page block pl-4 py-4 hover:text-orange-600 hover:bg-coolgrayplus-100 ${
                location.pathname === '/' &&
                'text-orange-600 bg-coolgrayplus-100'
              }`}
              onClick={closeHandler}
            >
              Accueil
            </Link>
            <Link
              to='/photos'
              className={`link-page block pl-4 py-4 hover:text-orange-600 hover:bg-coolgrayplus-100 ${
                location.pathname === '/photos' &&
                'text-orange-600 bg-coolgrayplus-100'
              }`}
              onClick={closeHandler}
            >
              Photos
            </Link>
            <Link
              to='/contact'
              className={`link-page block pl-4 py-4 hover:text-orange-600 hover:bg-coolgrayplus-100 ${
                location.pathname === '/contact' &&
                'text-orange-600 bg-coolgrayplus-100'
              }`}
              onClick={closeHandler}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  py: '5',
  color: 'transparent',
};

export default Header;
