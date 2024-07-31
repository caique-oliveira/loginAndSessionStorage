import { useState } from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import AppRoutes from './routes';

const App = () => {
  return (
    <div className="App">
      <Header />
        <AppRoutes />
      <Footer />
    </div>
  )
}

export default App;