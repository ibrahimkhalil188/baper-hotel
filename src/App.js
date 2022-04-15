
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Banner from './Pages/Home/Banner/Banner';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Routes>
        <Route></Route>
      </Routes>

    </div>
  );
}

export default App;
