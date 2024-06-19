
import React from 'react';
import './styles/App.css';
import { CardList } from './components/CardList/CardList';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';


function App() {
  return (
    <>
      <Header></Header>
      <CardList></CardList>
      <Footer></Footer>
    </>
  );
}

export default App;
