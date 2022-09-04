import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Component, DashboardContainer } from "./styles";
import SideBar from "../../components/SideBar";

export default function DashboardLayout() {
  const userEnteredMainUrl = useLocation().pathname === "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (userEnteredMainUrl) {
      navigate("/home");
    }
  }, [navigate, userEnteredMainUrl]);

  return (
    <Component>
      <SideBar />
      <DashboardContainer>
        <Outlet />
      </DashboardContainer>
    </Component>
  );
}
