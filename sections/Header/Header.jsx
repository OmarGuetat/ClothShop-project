import './Header.css';
import logo from '../../assets/WebMaterial/ShopLogo.png';
import { NavItem, NavItemDropDown } from '../../components/index';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-light bg-warning shop-navbar ">
      <div className="container ">
        <Link href="#" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
          aria-controls="mainmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-3  " id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem className="nav-item">
              <Link to="/#" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItemDropDown className="nav-item dropdown">
              <Link
                to="/#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Sections
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/#" className="dropdown-item">
                    Male
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="dropdown-item">
                    Female
                  </Link>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <Link to="/#" className="dropdown-item">
                    Kids
                  </Link>
                </li>
              </ul>
            </NavItemDropDown>
            <NavItem>
              <Link to="/wardrobe" className="nav-link">
                Wardrobe
              </Link>
            </NavItem>
            <li className="nav-item">
              <form className="d-flex py-1 " role="search">
                <input
                  className="form-control form-control-sm me-1"
                  list="datalistOptions"
                  placeholder="Type to search..."
                />
                <datalist id="datalistOptions">
                  <option value="Produit1" />
                  <option value="Produit2" />
                  <option value="Produit3" />
                  <option value="Produit4" />
                  <option value="Produit5" />
                </datalist>
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
