import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


//Problem with redux-persist V6

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App/App';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

// import store, { persistor } from './redux/store'

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <PersistGate persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );


