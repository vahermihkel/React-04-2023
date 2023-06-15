import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';

function NavigationBar() {
  const { t, i18n } = useTranslation();
  const { cartSum } = useContext(CartSumContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

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

  // const login = () => {
  //   setLoggedIn(true);
  // }

  const logout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">Mihkel's shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {loggedIn === true && <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>}
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
          </Nav>
          <Nav>
            {loggedIn === false &&
              <>
                <Nav.Link as={Link} to="/login">Logi sisse</Nav.Link>
                <Nav.Link as={Link} to="/signup">Registreeru</Nav.Link>
              </>}
            {loggedIn === true && <button onClick={logout}>Logi välja</button>}
            <div>{cartSum} €</div>
            <img className="lang" src="/english.png" onClick={() => languageChange("en")} alt="" />
            <img className="lang" src="/estonian.png" onClick={() => languageChange("ee")} alt="" />
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar