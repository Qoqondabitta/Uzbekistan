import React from "react";
import {
  NavbarList,
  NavbarListItem,
  NavbarLinks,
  UzbekistanLogoNavbar,
} from "./navbarStyle";
import "../../display.css";
import uzbekistanLogo from "../../assets/images/uzbekistan-logo-for-navbar.png";
import { Container, Main } from "../generalStyles/containers";
import { navbarItems } from "../../constants/componentConstants/navbar";
import { Links } from "react-router-dom";

const Navbar = () => {
  return (
    <Main className="center">
      <Container className="just-between">
        <UzbekistanLogoNavbar src={uzbekistanLogo} />
        <NavbarList className="center">
          {navbarItems.map((v, i) => (
            <NavbarLinks key={i}>
              <NavbarListItem>{v.title[0]}</NavbarListItem>
            </NavbarLinks>
          ))}
        </NavbarList>
      </Container>
    </Main>
  );
};

export default Navbar;
