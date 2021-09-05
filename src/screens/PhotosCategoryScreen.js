import { Link } from 'react-router-dom';
import photos from '../photos';

const PhotosCategoryScreen = ({ match }) => {
  const category = match.params.category;
  let title;

  switch (category) {
    case 'art':
      title = 'Art / Abstrait';
      break;
    case 'alimentation':
      title = 'Alimentation / Culinaire';
      break;
    case 'animaux':
      title = 'Animaux / Faune';
      break;
    case 'architecture':
      title = 'Architecture Intérieure / Extérieure';
      break;
    case 'nature':
      title = 'Nature / Flore';
      break;
    case 'paysage':
      title = 'Paysage / Voyage';
      break;
    case 'portrait':
      title = 'Portrait';
      break;
    default:
      break;
  }

  const photosAdd = photos.filter((p) => p.category === match.params.category);

  return (
    <div className='bg-coolgray-900 min-h-screen'>
      <div className='mx-4 md:w-10/12 lg:w-9/12 md:mx-auto lg:mx-auto pt-36'>
        <span className='text-white text-xl'>{title}</span>
        {photosAdd.length === 0 ? (
          <div className='flex items-center justify-center mt-32'>
            <span className='text-xl text-white'>
              Pas de photos pour le moment ...
            </span>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3'>
            {photosAdd.map((photo) => (
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
        )}
      </div>
    </div>
  );
};

export default PhotosCategoryScreen;
