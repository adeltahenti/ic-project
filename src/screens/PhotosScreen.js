import { Link } from 'react-router-dom';
import photos from '../photos';

const PhotosScreen = () => {
  return (
    <div className='bg-coolgray-900 min-h-screen'>
      <div className='mx-4 md:w-10/12 lg:w-9/12 md:mx-auto lg:mx-auto pt-36'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {photos.map((photo) => (
            <div key={photo._id}>
              <Link to={`/photos/${photo.category}/${photo._id}`}>
                <img
                  src={photo.image}
                  alt={photo.name}
                  className='rounded shadow-xl transform transition duration-500 hover:scale-105'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotosScreen;
