
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
import FoodHeader from './Pages/Home/Food/FoodHeader/FoodHeader';
import BreakFast from './Pages/Home/Food/BreakFasts/BreakFasts';
import Lunch from './Pages/Home/Food/Lunch/Lunch';
import Dinner from './Pages/Home/Food/Dinner/Dinner';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <FoodHeader />
      <Routes>
        <Route path='breakfast' element={<BreakFast />} />
        <Route path='lunch' element={<Lunch />} />
        <Route path='dinner' element={<Dinner />} />
      </Routes>

    </div>
  );
}

export default App;
