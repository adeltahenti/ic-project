import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DropDown from './DropDown';

const Header = () => {
  const location = useLocation();
  const locationUrl = location.pathname;
  let loc;
  // console.log(locationUrl.lastIndexOf('/'));

  if (locationUrl.lastIndexOf('/') > 7) {
    loc = location.pathname.slice(0, locationUrl.lastIndexOf('/'));
  } else {
    loc = location.pathname;
  }

  // console.log(loc);

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
    <header className='absolute top-0 left-0 w-full z-10 bg-transparent'>
      <div className='mx-4 md:w-10/12 lg:w-1/2 md:mx-auto flex items-center justify-between text-white my-6'>
        <Link to='/' className='flex flex-col items-center font-lobster'>
          <span className='' style={{ fontSize: '2rem' }}>
            Isabelle Cattin
          </span>
          <span className='' style={{ fontSize: '1rem' }}>
            Photographie
          </span>
        </Link>
        <div className='md:flex md:flex-row md:items-center md:space-x-4 hidden'>
          <Link
            to='/'
            className={`hover:text-orange-600 ${
              loc === '/' && 'text-orange-600'
            }`}
          >
            Accueil
          </Link>
          <DropDown name='Photos' loc={loc} />
          <Link
            to='/contact'
            className={`hover:text-orange-600 ${
              loc === '/contact' && 'text-orange-600'
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
            <div className='text-right px-5 py-12'>
              <button className='mobile-menu-close'>
                <i className='fas fa-times text-xl'></i>
              </button>
            </div>
            <Link
              to='/'
              className={`block pl-4 py-4 hover:text-orange-600 hover:bg-coolgrayplus-100 ${
                loc === '/' && 'text-orange-600 bg-coolgrayplus-100'
              }`}
              onClick={closeHandler}
            >
              Accueil
            </Link>
            <span className='flex flex-col'>
              <span
                className={`block pl-4 py-4 hover:text-orange-600 hover:bg-coolgrayplus-100 ${
                  (loc === '/photos' ||
                    loc === '/photos/art' ||
                    loc === '/photos/alimentation' ||
                    loc === '/photos/animaux' ||
                    loc === '/photos/architecture' ||
                    loc === '/photos/nature' ||
                    loc === '/photos/paysage' ||
                    loc === '/photos/portrait') &&
                  'text-orange-600 bg-coolgrayplus-100'
                }`}
              >
                Photos
              </span>
              <Link
                to='/photos/art'
                className={`pl-10 py-2 hover:text-orange-600 ${
                  loc === '/photos/art' && 'text-orange-600 bg-coolgrayplus-100'
                }`}
                onClick={closeHandler}
              >
                Art / Abstrait
              </Link>
              <Link
                to='/photos/alimentation'
                className={`pl-10 py-2 hover:text-orange-600 ${
                  loc === '/photos/alimentation' &&
                  'text-orange-600 bg-coolgrayplus-100'
                }`}
                onClick={closeHandler}
              >
                Alimentation / Culinaire
              </Link>
              <Link
                to='/photos/animaux'
                className={`pl-10 py-2 hover:text-orange-600 ${
                  loc === '/photos/animaux' &&
                  'text-orange-600 bg-coolgrayplus-100'
                }`}
                onClick={closeHandler}
              >
                Animaux / Faune
              </Link>
              <Link
                to='/photos/architecture'
                className={`pl-10 py-2 hover:text-orange-600 ${
                  loc === '/photos/architecture' &&
                  'text-orange-600 bg-coolgrayplus-100'
                }`}
                onClick={closeHandler}
              >
                Architecture Intérieur / Extérieur
              </Link>
              <Link
                to='/photos/nature'
                className={`pl-10 py-2 hover:text-orange-600 ${
                  loc === '/photos/nature' &&
                  'text-orange-600 bg-coolgrayplus-100'
                }`}
                onClick={closeHandler}
              >
                Nature / Flore
              </Link>
              <Link
                to='/photos/paysage'
                className={`pl-10 py-2 hover:text-orange-600 ${
                  loc === '/photos/paysage' &&
                  'text-orange-600 bg-coolgrayplus-100'
                }`}
                onClick={closeHandler}
              >
                Paysage / Voyage
              </Link>
              <Link
                to='/photos/portrait'
                className={`pl-10 py-2 hover:text-orange-600 ${
                  loc === '/photos/portrait' &&
                  'text-orange-600 bg-coolgrayplus-100'
                }`}
                onClick={closeHandler}
              >
                Portrait
              </Link>
              <Link
                to='/photos'
                className={`pl-10 py-2 hover:text-orange-600 ${
                  loc === '/photos' && 'text-orange-600'
                }`}
                onClick={closeHandler}
              >
                Toutes ...
              </Link>
            </span>
            <Link
              to='/contact'
              className={`block pl-4 py-4 hover:text-orange-600 hover:bg-coolgrayplus-100 ${
                loc === '/contact' && 'text-orange-600 bg-coolgrayplus-100'
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

export default Header;
