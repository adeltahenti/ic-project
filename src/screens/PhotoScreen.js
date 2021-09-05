import photos from '../photos';

const PhotoScreen = ({ match }) => {
  const photo = photos.find((p) => p._id === match.params.id);
  return (
    <div className='bg-coolgray-900 min-h-screen'>
      <div className='mx-4 md:w-10/12 lg:w-9/12 md:mx-auto lg:mx-auto pt-36'>
        <img
          src={photo.image}
          alt={photo.name}
          className='rounded shadow-2xl'
        />
      </div>
    </div>
  );
};

export default PhotoScreen;
