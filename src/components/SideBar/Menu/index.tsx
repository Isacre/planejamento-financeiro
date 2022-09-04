import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { SidebarMenu } from "../../../types";
import { Link } from "react-router-dom";

interface MenuProps {
  menu: SidebarMenu;
}

const NavbarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  font-size: 30px;
  cursor: pointer;

  ::before {
    content: "";
    background-color: var(--color-main);
    width: ${(props) => (props.className === "selected" ? "4px" : "0px")};
    transition: all 200ms ease-in-out;
    height: 40px;
  }

  svg {
    fill: ${(props) => (props.className === "selected" ? "var(--color-main)" : "#00000")};
    transition: all 50ms ease-in-out;
  }
`;

const MenuIcon = styled.div`
  background-color: transparent;
  transition: 200ms all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 10px;

  :hover {
    background-color: #8080804e;
    border-radius: 25px;
  }
`;

export default function Menu(props: MenuProps) {
  const { menu } = props;
  const userIsInMenu = useLocation().pathname === menu.route;

  return (
    <NavbarItem className={userIsInMenu ? "selected" : ""}>
      <Link to={menu.route}>
        <MenuIcon>
          <menu.icon />
        </MenuIcon>
      </Link>
    </NavbarItem>
  );
}
