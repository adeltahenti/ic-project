import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeOneScreen from './screens/HomeOneScreen';
import Header from './components/Header';
import HomeTwoScreen from './screens/HomeTwoScreen';
import HomeThreeScreen from './screens/HomeThreeScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className=''>
        <Route path='/' component={HomeOneScreen} exact />
        <Route path='/home1' component={HomeTwoScreen} exact />
        <Route path='/home2' component={HomeThreeScreen} exact />
      </main>
    </Router>
  );
};

export default App;
