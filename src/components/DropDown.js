import { Link } from 'react-router-dom';

const DropDown = (props) => {
  const onClickHandler = () => {
    const dpdMenu = document.getElementById('dropdowmnemu');
    const dpdIcon = document.querySelector('.fas');
    dpdIcon.classList.toggle('fa-chevron-up');
    dpdMenu.classList.toggle('hidden');
  };

  const onCloseDropDown = () => {
    onClickHandler();
  };

  return (
    <span className='flex items-center justify-center'>
      <div className='relative'>
        <button
          className={`flex items-center space-x-1 hover:text-orange-600 ${
            (props.loc === '/photos' ||
              props.loc === '/photos/art' ||
              props.loc === '/photos/alimentation' ||
              props.loc === '/photos/animaux' ||
              props.loc === '/photos/architecture' ||
              props.loc === '/photos/nature' ||
              props.loc === '/photos/paysage' ||
              props.loc === '/photos/portrait') &&
            'text-orange-600'
          }`}
          onClick={onClickHandler}
        >
          <span>{props.name}</span>{' '}
          <i className='fas fa-chevron-down fa-xs'></i>
        </button>
        <div className='hidden absolute right-0' id='dropdowmnemu'>
          <div className='rounded bg-white grid grid-cols-1 divide-y text-black text-xs w-44 mt-2'>
            <Link
              to='/photos/art'
              className={`px-2 py-2 hover:text-orange-600 ${
                props.loc === '/photos/art' && 'text-orange-600'
              }`}
              onClick={onCloseDropDown}
            >
              Art / Abstrait
            </Link>
            <Link
              to='/photos/alimentation'
              className={`px-2 py-2 hover:text-orange-600 ${
                props.loc === '/photos/alimentation' && 'text-orange-600'
              }`}
              onClick={onCloseDropDown}
            >
              Alimentation / Culinaire
            </Link>
            <Link
              to='/photos/animaux'
              className={`px-2 py-2 hover:text-orange-600 ${
                props.loc === '/photos/animaux' && 'text-orange-600'
              }`}
              onClick={onCloseDropDown}
            >
              Animaux / Faune
            </Link>
            <Link
              to='/photos/architecture'
              className={`px-2 py-2 hover:text-orange-600 ${
                props.loc === '/photos/architecture' && 'text-orange-600'
              }`}
              onClick={onCloseDropDown}
            >
              Architecture Intérieur / Extérieur
            </Link>
            <Link
              to='/photos/nature'
              className={`px-2 py-2 hover:text-orange-600 ${
                props.loc === '/photos/nature' && 'text-orange-600'
              }`}
              onClick={onCloseDropDown}
            >
              Nature / Flore
            </Link>
            <Link
              to='/photos/paysage'
              className={`px-2 py-2 hover:text-orange-600 ${
                props.loc === '/photos/paysage' && 'text-orange-600'
              }`}
              onClick={onCloseDropDown}
            >
              Paysage / Voyage
            </Link>
            <Link
              to='/photos/portrait'
              className={`px-2 py-2 hover:text-orange-600 ${
                props.loc === '/photos/portrait' && 'text-orange-600'
              }`}
              onClick={onCloseDropDown}
            >
              Portrait
            </Link>
            <Link
              to='/photos'
              className={`px-2 py-2 hover:text-orange-600 ${
                props.loc === '/photos' && 'text-orange-600'
              }`}
              onClick={onCloseDropDown}
            >
              Toutes ...
            </Link>
          </div>
        </div>
      </div>
    </span>
  );
};

export default DropDown;
