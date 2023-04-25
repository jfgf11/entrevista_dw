import './App.css';
import NavBar from './components/utils/NavBar';
import ItemList from './components/ItemList';
import TitleBar from './components/utils/TitleBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <div>
      <NavBar section = 'Popular Titles'/>
      <BrowserRouter>
        <Routes>

            <Route path='/' element={
              <div>
                <TitleBar section='Popular Content'/>
                <ItemList type='main'/>
              </div>
            }>
            </Route>
            <Route path='/series' element={
              <div>
              <TitleBar section='Popular Series'/>
              <ItemList type='series'/>
            </div>
            }>
            </Route>
            <Route path='/movies' element={
              <div>
              <TitleBar section='Popular Movies'/>
              <ItemList type='movie'/>
            </div>
            }>
            </Route>     
        </Routes>
    </BrowserRouter>
    </div>


  );
}

export default App;
