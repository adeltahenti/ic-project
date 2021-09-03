const HomeTwoScreen = () => {
  return (
    <div className='relative flex items-center justify-center min-h-screen'>
      <video
        src='/videos/video1.mp4'
        className='absolute top-0 left-0 object-cover h-screen w-screen'
        autoPlay
        loop
        muted
      ></video>
      <div className='flex flex-col items-center justify-center bg-gray-900 bg-opacity-50 text-white py-16 lg:py-32 z-10 w-full'>
        <h1 className='text-2xl md:text-3xl lg:text-5xl text-white animate__animated animate__fadeInLeft animate__delay-0.5s'>
          Ma page d'accueil
        </h1>
        <p className='text-white mt-3 animate__animated animate__fadeInRight md:px-3 text-center px-2'>
          Avec une vidéo comme fond, que tu pourras aussi choisir. La couleur du
          texte peut variée.
        </p>
      </div>
    </div>
  );
};

export default HomeTwoScreen;
