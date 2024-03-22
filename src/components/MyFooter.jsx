import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const MyFooter = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={2}>
          <FaFacebook className="fs-1 text-primary" />
        </Col>
        <Col xs={2}>
          <FaInstagram className="fs-1 text-danger" />
        </Col>
        <Col xs={2}>
          <FaTwitter className="fs-1 text-info" />
        </Col>
        <Col xs={2}>
          <FaWhatsapp className="fs-1 text-white bg-success rounded-circle p-1" />
        </Col>
      </Row>
      <Row className="justify-content-center mt-2">
        <Col xs={4} className="text-center">
          <span>&copy;EpiMeteo!</span>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
