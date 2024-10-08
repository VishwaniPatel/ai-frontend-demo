import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useLayout from "../hooks/useLayout";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import RightButtons from "./right-buttons/RightButtons";
import SidebarMenu from "../layout/nav/sidebar-menu/SidebarMenu";

const Layout = ({ children }) => {
  useLayout();

  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.click();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [pathname]);
  return (
    <>
      <Nav />
      <main>
        <Container>
          <Row className="h-100">
            <SidebarMenu />
            <Col className="h-100" id="contentArea">
              {children}
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
      <RightButtons />
    </>
  );
};

export default React.memo(Layout);
