import { Link, Route, Routes } from 'react-router-dom';
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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  // const languageToEn = () => {
  //   i18n.changeLanguage("en");
  //   localStorage.setItem("language","en");
  // }

  // const languageToEe = () => {
  //   i18n.changeLanguage("ee");
  //   localStorage.setItem("language","ee");
  // }

  const languageChange = (languageClicked) => {
    i18n.changeLanguage(languageClicked);
    localStorage.setItem("language",languageClicked);
  }

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">Mihkel's shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
              <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            </Nav>
            <Nav>
              <img className="lang" src="/english.png" onClick={() => languageChange("en")} alt="" />
              <img className="lang" src="/estonian.png" onClick={() => languageChange("ee")} alt="" />
              <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        <Route path="admin" element={ <AdminHome /> } />
        <Route path="admin/add-product" element={ <AddProduct /> } />
        <Route path="admin/edit-product/:id" element={ <EditProduct /> } />
        <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
        <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
        <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <Signup /> } />
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
