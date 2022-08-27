import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes , Route} from 'react-router-dom'
// import Properties from './components/Properties/Properties';
// import SearchFilter from './components/SearchFilter/SearchFilter';
import Home from './pages/Home/Home'
import Buy from './pages/Buy/Buy'
import Rent from './pages/Rent/Rent'
import Login from './pages/Login/Login'
import Sell from './pages/Sell/Sell'
import Signup from './pages/Signup/Signup'
import Favourite from './pages/Favourite/FavouriteProperty'
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SearchFilter />
      <Properties/> */}

      <Routes>
       
       <Route path='/' element={<Home />} />
       <Route path='/Rent' exact  element={<Rent />} />
       <Route path='/Buy'  exact element={<Buy />} />
       <Route path='/Sell' exact  element={<Sell />} />
       <Route path='/Favourite' exact  element={<Favourite />} />
       <Route path='/Login' exact  element={<Login />} />
       <Route path='/Signup'  exact  element={<Signup />} />

      </Routes>
    </div>
  );
}

export default App;
