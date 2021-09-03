const HomeOneScreen = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen relative"
      style={{ backgroundImage: "url(/images/img1.jpg)" }}
    >
      {/* <div className='absolute bg-gradient-to-b from-gray-100 to-gray-200 opacity-25 inset-0 z-0'></div> */}
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-gray-200 font-bold text-2xl md:text-3xl lg:text-5xl animate__animated animate__fadeInLeft animate__delay-0.5s">
          Ma page d'accueil
        </span>
        <p className="text-gray-200 font-boldmt-3 animate__animated animate__fadeInRight md:px-3 text-center px-2">
          Avec une photo comme fond plus un filtre, en sachant que tu choisir ta
          photo ainsi que le filtre. Aussi la couleur du texte peut variée.
        </p>
      </div>
    </div>
  );
};

export default HomeOneScreen;
