import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleCard from "./SingleCard";
import { useState } from "react";

const HomePage = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(e.target.elements.city.value);
  };

  return (
    <Container>
      <Row className="justify-content-center my-2">
        <Col xs={6}>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control type="text" placeholder="Cerca una città" name="city" />
            <Button type="submit" className="ms-2">
              Cerca
            </Button>
          </Form>
        </Col>
      </Row>
      {search !== "" && (
        <Row>
          <Col>
            <SingleCard cityProp={search} />
          </Col>
        </Row>
      )}
      <h3 className="text-center mt-4 text-body-tertiary">Meteo Città Italiane</h3>
      <Row>
        <Col md={6}>
          <SingleCard cityProp={"Milan"} />
        </Col>
        <Col md={6}>
          <SingleCard cityProp={"Rome"} />
        </Col>
        <Col md={6}>
          <SingleCard cityProp={"Florence"} />
        </Col>
        <Col md={6}>
          <SingleCard cityProp={"Catania"} />
        </Col>
        <Col md={6}>
          <SingleCard cityProp={"Sassari"} />
        </Col>
        <Col md={6}>
          <SingleCard cityProp={"Venice"} />
        </Col>
        <Col md={6}>
          <SingleCard cityProp={"Bari"} />
        </Col>
        <Col md={6}>
          <SingleCard cityProp={"Naples"} />
        </Col>
      </Row>
      <h3 className="text-center mt-4 text-body-tertiary">Meteo Città Europee</h3>
      <Row>
        <Col md={6}>
          <SingleCard cityProp={"London"} />
        </Col>
        <Col md={6}>
          <SingleCard cityProp={"Madrid"} />
        </Col>
        <Col md={6}>
          <SingleCard cityProp={"Paris"} />
        </Col>
        <Col md={6}>
          <SingleCard cityProp={"Berlin"} />
        </Col>
        <Col md={6}>
          <SingleCard cityProp={"Oslo"} />
        </Col>
        <Col md={6}>
          <SingleCard cityProp={"Lugano"} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
