import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../img/logo2.png";

import HomeIcon from "@mui/icons-material/Home";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const toggleDrawer = (open) => () => setIsDrawerOpen(open);

  const navLinks = [
    { to: "/", icon: <HomeIcon />, text: "Inicio" },
    { to: "/filter/Male", icon: <MaleIcon />, text: "Masculino" },
    { to: "/filter/Female", icon: <FemaleIcon />, text: "Femenino" },
    { to: "/DatosPersonales", icon: <PeopleAltIcon />, text: "Acerca de" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      {isSmallScreen ? (
        <>
          <div className="navbar-mobile">
            
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="menu-button"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List sx={{ width: 250 }}>
              {navLinks.map((link) => (
                <ListItem
                  button
                  key={link.text}
                  component={NavLink}
                  to={link.to}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      ) : (
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.text}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "item active" : "item"
                }
              >
                {link.icon} {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {navLinks.map((link) => (
            <ListItem
              button
              key={link.text}
              component={NavLink}
              to={link.to}
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </nav>
  );
};

export default NavBar;
