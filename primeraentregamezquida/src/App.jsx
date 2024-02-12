import React from 'react';
import Navbar from '../src/components/NavBar/Navbar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import Footer from '../src/components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />

          <Route path='/categoria/:categoryId' element={<ItemListContainer />} />

          <Route path='/detalle/:id' element={<ItemDetailContainer />} />

          <Route path='*' element={<Error />} />

        </Routes>

        <Footer />

      </BrowserRouter>





    </>
  );
};

export default App;