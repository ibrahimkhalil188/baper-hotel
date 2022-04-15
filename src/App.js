
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
import FoodHeader from './Pages/Home/Food/FoodHeader/FoodHeader';
import BreakFasts from './Pages/Home/Food/BreakFasts/BreakFasts';
import Dinners from './Pages/Home/Food/Dinners/Dinners';
import Lunchs from './Pages/Home/Food/Lunchs/Lunchs';
import Reason from './Pages/Home/Reason/Reason';
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <FoodHeader />

      <Routes>
        <Route path='/' element={<BreakFasts />} />
        <Route path='dinner' element={<Dinners></Dinners>}
        ></Route>
        <Route path='lunch' element={<Lunchs></Lunchs>}></Route>
      </Routes>
      <Reason></Reason>

    </div>
  );
}

export default App;
