const PhotosScreen = () => {
  return (
    <div className="bg-coolgray-900 min-h-screen">
      <div className="mx-4 md:w-10/12 lg:w-9/12 md:mx-auto lg:mx-auto pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="">
            <img
              src="/images/photo1.jpg"
              alt="photo1"
              className="rounded shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="">
            <img
              src="/images/photo2.jpg"
              alt="photo1"
              className="rounded shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="">
            <img
              src="/images/photo3.jpg"
              alt="photo1"
              className="rounded shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="">
            <img
              src="/images/photo4.jpg"
              alt="photo1"
              className="rounded shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="">
            <img
              src="/images/photo5.jpg"
              alt="photo1"
              className="rounded shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="">
            <img
              src="/images/photo6.jpg"
              alt="photo1"
              className="rounded shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosScreen;
