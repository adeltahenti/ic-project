import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import PhotosScreen from './screens/PhotosScreen';
import ArtScreen from './screens/ArtScreen';
import AlimentationScreen from './screens/AlimentationScreen';
import AnimauxScreen from './screens/AnimauxScreen';
import ArchitectureScreen from './screens/ArchitectureScreen';
import NatureScreen from './screens/NatureScreen';
import PaysageScreen from './screens/PaysageScreen';
import PortraitScreen from './screens/PortraitScreen';
import ContactScreen from './screens/ContactScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className=''>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/photos' component={PhotosScreen} exact />
        <Route path='/photos/art' component={ArtScreen} exact />
        <Route
          path='/photos/alimentation'
          component={AlimentationScreen}
          exact
        />
        <Route path='/photos/animaux' component={AnimauxScreen} exact />
        <Route
          path='/photos/architecture'
          component={ArchitectureScreen}
          exact
        />
        <Route path='/photos/nature' component={NatureScreen} exact />
        <Route path='/photos/paysage' component={PaysageScreen} exact />
        <Route path='/photos/portrait' component={PortraitScreen} exact />
        <Route path='/contact' component={ContactScreen} exact />
      </main>
    </Router>
  );
};

export default App;
