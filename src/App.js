
import './App.css';
import { Routes,Route } from 'react-router';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path='/' element={<BookList/>}/>
        <Route path='/books/:id' element={<BookDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
