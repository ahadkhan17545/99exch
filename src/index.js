import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthProvider>
        <BrowserRouter>
          <div className='h-screen'>
            <div className="grid grid-cols-12">
              <div className='col-span-12 lg:h-[6.64rem]'>
                <Header />
              </div>
              <div className='col-span-12 flex'>
                <div className='w-full'>
                  <App />
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </PersistGate>
  </Provider >
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


