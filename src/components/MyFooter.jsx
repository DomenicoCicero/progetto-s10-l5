import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const MyFooter = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={2} className="text-center">
          <FaFacebook className="fs-1 text-primary" />
        </Col>
        <Col xs={2} className="text-center">
          <FaInstagram className="fs-1 text-danger" />
        </Col>
        <Col xs={2} className="text-center">
          <FaTwitter className="fs-1 text-info" />
        </Col>
        <Col xs={2} className="text-center">
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
