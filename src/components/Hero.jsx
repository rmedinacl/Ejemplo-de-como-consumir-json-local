import { Image, Container, Row, Col } from "react-bootstrap";
export default function Hero() {
  return (
    <Container fluid className="p-0 position-relative">
      <Row>
        <Col xs={12} className="p-0">
          <Image src="./src/assets/img/pizzahero.png" fluid className="w-100" />
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <h1 className="text-white text-pizza ">¡ Pizzeria Mama Mía !</h1>
            <h3 className="text-white fs-4 fs-lg-5">
              Tenemos las mejores pizzas que podrás encontrar
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
