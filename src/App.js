import React from 'react';
import Subscribers from './components/Subscribers';
import Display from './components/Display';
import Views from './components/Views';
import Comments from './components/Comments';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {

  return (
    <Provider store={store}>
      <div className='App'>
        <Comments/>
        <Subscribers/>
        <Display/>
        <Views/>
      </div>
    </Provider>
  );
}


export default App;
