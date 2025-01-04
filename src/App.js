import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';

import Header from './components/layout/Header';

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
              <Route path='/' element ={<Home />} />
              <Route path='/products' element ={<Products />} />
              <Route path='/cart' element ={<Cart />} />
              <Route path='/login' element ={<Login />} />
              <Route path='/register' element ={<Register />} />
          </Routes>

        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
