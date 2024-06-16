import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/PizzaContext";
import { IconBinoculars, IconShoppingCartBolt } from "@tabler/icons-react";

export default function Home() {
  const { pizzas, addCart, monedaLocal } = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      <Container className="home mb-3">
        <div className="home-body">
          <h1 className="fw-bold">Pizzería Mamma Mia!</h1>
        </div>
      </Container>
      <Container>
        <Row xs={1} md={3} lg={4} className="g-3 mb-3">
          {pizzas.map((pizza) => (
            <Col key={pizza.id}>
              <Card>
                <Card.Img src={pizza.img} alt={pizza.name} />
                <Card.Header>
                  <span className="pizza-name">{pizza.name}</span>
                </Card.Header>
                <Card.Body>
                  <strong>Ingredientes:</strong>
                  <ul>
                    {pizza.ingredients.map((ingrediente, index) => (
                      <li key={index}>🍕 {ingrediente}</li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="text-center pb-4">
                  <Card.Text className="pizza-price">
                    {monedaLocal(pizza.price)}
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-around">
                    <Button
                      variant="info"
                      onClick={() =>
                        navigate(`/desafio-mammamia/pizza/${pizza.id}`)
                      }
                    >
                      <IconBinoculars /> Ver más
                    </Button>
                    <Button variant="danger" onClick={() => addCart(pizza)}>
                      <IconShoppingCartBolt /> Añadir{" "}
                    </Button>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
