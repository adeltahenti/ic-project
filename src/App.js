import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import PhotoScreen from './screens/PhotoScreen';
import PhotosScreen from './screens/PhotosScreen';
import ContactScreen from './screens/ContactScreen';
import PhotosCategoryScreen from './screens/PhotosCategoryScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className=''>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/photos' component={PhotosScreen} exact />
        <Route
          path='/photos/:category'
          component={PhotosCategoryScreen}
          exact
        />
        <Route path='/photos/:category/:id' component={PhotoScreen} />
        <Route path='/contact' component={ContactScreen} exact />
      </main>
    </Router>
  );
};

export default App;
