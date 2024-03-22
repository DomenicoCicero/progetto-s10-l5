import { Col, Container, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

const Regions = () => {
  return (
    <Container>
      <h3 className="text-center mt-4">Meteo Delle Regioni Italiane</h3>
      <Row>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Abruzzo"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Basilicata"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Calabria"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Campania"} />
        </Col>

        <Col md={6} className="h-110">
          <SingleCard cityProp={"Lazio"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Liguria"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Lombardia"} />
        </Col>

        <Col md={6} className="h-110">
          <SingleCard cityProp={"Molise"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Piemonte"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Puglia"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Sardegna"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Sicilia"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Toscana"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Umbria"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Valle d'Aosta"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Veneto"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Marche"} />
        </Col>
        <Col md={6} className="h-110">
          <SingleCard cityProp={"Emilia-Romagna"} />
        </Col>
      </Row>
    </Container>
  );
};

export default Regions;
