import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import Shops from './pages/global/Shops';
import {ContactUs} from './pages/global/ContactUs';
import SingleProduct from './pages/global/SingleProduct';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import NavigationBar from './components/NavigationBar';
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';
import NotFound from './pages/global/NotFound';

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <NavigationBar />
     
      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        {loggedIn === true &&
          <>
            <Route path="admin" element={ <AdminHome /> } />
            <Route path="admin/add-product" element={ <AddProduct /> } />
            <Route path="admin/edit-product/:id" element={ <EditProduct /> } />
            <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
            <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
            <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
          </>}
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <Signup /> } />
        <Route path="*" element={ < NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;

// 25.05  
// AddProduct: ID unikaalsuse kontroll -> EditProductis näidata ühte anomaaliat
// EditProduct: Kontrollid peale if ()
// MaintainProducts: active kasutusele -> mitteaktiivne, siis punane taust
// HomePage: mitteaktiivne, siis ära näita
// HomePage: Funktsiooni taaskasutamine filtreerimise osas

// 30.05   13
// API päring -> võtame kõik pakiautomaadid

// 02.06:  14
// API päring -> andmebaas, kategooriad andmebaasi

// KOJU: EditProductis kategooria dropdownist
//       MaintainShops.jsx terve fail MaintainCategories.jsx järgi    
//       Shops.jsx HomePage.jsx järgi nagu kategooriad
//       Map.jsx Markerite asendus
// 06.06:  15
// API päring -> tooted andmebaasi
// Loaderid

// 08.06:  16
// API päring: Makse
// Components: Tekitame alamfaile
// CSS moodulid

// 13.06:  17
// UseContext ehk globaalne muutuja: ostukorvi kogusumma näitamisega Navbaris
// UseContext sisselogimise ja registreerumise võtmes

// 15.06:  18
// Sisselogimise ja registreerumise jätk
// Näitan teile bakery-shop lahendust (enne proovige ise lõpuni välja teha)


// 29.06: lõpuprojekti esitlemine (teie näitate)

// Lõpuprojekt: Reactis
// Variandid: Võetud Youtube video/ Udemy videoseeria -> modifitseeritud
// Ise välja mõelda nullist
