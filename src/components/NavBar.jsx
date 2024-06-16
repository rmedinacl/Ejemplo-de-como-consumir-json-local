import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Context } from "../context/PizzaContext";
import { IconShoppingCart } from "@tabler/icons-react";

export default function NavbarPizza() {
  const { totalCart, monedaLocal } = useContext(Context);
  return (
    <div>
      <Navbar variant="dark" expand="lg" className=" nav-bar ">
        <Container fluid>
          <Navbar.Brand className="gap-2" href="/">
            <img
              alt="Icono Pizza"
              src="/src/assets/img/iconofinalpizza.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />{" "}
            Seleccione su pizza
          </Navbar.Brand>
          <Nav className="gap-2 me-4">
            <IconShoppingCart size={30} color="white" />
            <NavLink
              to={"/desafio-mammamia/carrito"}
              className={totalCart ? "cart-price" : "cart"}
            >
              {totalCart ? "  " + monedaLocal(totalCart) : null}
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
