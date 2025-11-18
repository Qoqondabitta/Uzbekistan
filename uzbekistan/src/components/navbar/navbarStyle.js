import styled from "styled-components"


export const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  background-color: transparent;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  color: white;
  position: relative;
  padding: 15px;
  background-color: transparent;
`;


export const UzbekistanLogoNavbar = styled.img`
  width: 180px;
  height: 60px;
  object-fit: cover;
  object-position: center;
  @media only screen and (max-width: 1200px) {
    width: 120px;
    height: 35px;
  }
  @media only screen and (max-width: 600px) {
    width: 100px;
    height: 20px;
  }
`;

export const NavbarList = styled.div`
  gap: 20px;

  @media only screen and (max-width: 600px) {
    display: none;
    gap: 10px;
  }
`;

export const NavbarListItem = styled.p`
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;

  @media only screen and (max-width: 1200px) {
    text-transform: capitalize;
    font-size: 14px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

export const NavbarLinks = styled.a`
  text-decoration: none;
  color: white;
  font-size: 16px;
  color: white;
  z-index: 50;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Castoro Titling", serif;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

export const navbarButton = styled.button`
  width: 120px;
  font-family: "Cormorant Upright";
  font-weight: 600;
  background-color: #dcca87;
  border: none;
  font-size: 14px;
  z-index: 100;
  height: 30px;
  cursor: pointer;
  display: ${({ round }) => (round ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  transition: all 0.7s;
  &:hover {
    scale: 0.8;
  }

  @media only screen and (max-width: 900px) {
    font-size: 12px;
    width: 100px;
    height: 25px;
  }

  @media only screen and (max-width: 600px) {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: ${({ round }) => (round ? "flex" : "none")};
    /* position: ${({ round }) => (round ? "flex" : "none")}; */
    position: fixed;
    z-index: 200;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
  }
`;
