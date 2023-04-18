import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "../../css/navbar.css";
import search from "../../images/magnifier.png";
import logo from "../../images/Maybe.png";
import tvlg from "../../images/television.png";
import series from "../../images/series.png";
import cartoons from "../../images/cartoons.png";
import dramas from "../../images/love-you.png";
import anime from "../../images/torii-gate.png";
import { useNavigate } from "react-router-dom";

function Example(args) {
  const navigate = useNavigate();
  const handleSideClick = (id) => {
    navigate(id);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} className="nav">
        <NavbarBrand href="/">
          <img src={logo} alt="" className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="toggle" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className="nav-item">
            <NavLink onClick={(e) => handleSideClick("movie")}>
                <div className="Films">
                  <img className="tv-logo" src={tvlg} alt="" />
                  <p>Фильмы</p>
                </div>
              </NavLink>
              <NavLink>
                <div className="Series">
                  <img className="series-logo" src={series} alt="" />
                  <p>Сериалы</p>
                </div>
              </NavLink>
              <NavLink onClick={(e) => handleSideClick("cartoons")}>
                <div className="Cartoons">
                  <img className="cartoons-logo" src={cartoons} alt="" />
                  <p>Мультфильмы</p>
                </div>
              </NavLink>
              <NavLink>
                <div className="Dramas">
                  <img className="dramas-logo" src={dramas} alt="" />
                  <p>Дорамы</p>
                </div>
              </NavLink>
              <NavLink>
                <div className="Anime">
                  <img className="anime-logo" src={anime} alt="" />
                  <p>Аниме</p>
                </div>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
