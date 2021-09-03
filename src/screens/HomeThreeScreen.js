const HomeThreeScreen = () => {
  return (
    <div className='bg-gradient-to-b from-fuchsia-400 via-purple-500 to-gray-600'>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='rounded-full w-36 h-36 ring-8 flex items-center mb-5 bg-gray-300 ring-inset ring-gray-600'>
          <img src='/images/photo1.png' alt='photo1' className='' />
        </div>
        <span className='text-2xl md:text-3xl lg:text-5xl text-white animate__animated animate__fadeInLeft animate__delay-0.5s'>
          Ma page d'accueil
        </span>
        <p className='text-white mt-3 animate__animated animate__fadeInRight md:px-3 text-center px-2'>
          Avec un fond statique, tu pourras choisir la couleur, ainsi tu
          choisiras aussi une image ou une photo
        </p>
      </div>
    </div>
  );
};

export default HomeThreeScreen;
