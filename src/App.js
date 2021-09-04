import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import PhotosScreen from './screens/PhotosScreen';
import ContactScreen from './screens/ContactScreen';

const App = () => {
  return (
    <Router>
      <Header py='7' />
      <main className=''>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/photos' component={PhotosScreen} exact />
        <Route path='/contact' component={ContactScreen} exact />
      </main>
    </Router>
  );
};

export default App;
