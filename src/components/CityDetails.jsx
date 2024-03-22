import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

const CityDetails = () => {
  const [city, setCity] = useState(null);
  const params = useParams();
  console.log(params);

  const date = data => {
    const timestamp = data;
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleString();
    return formattedDate;
  };

  const windDirection = data => {
    let direction = "";

    switch (true) {
      case data === 0:
        direction = "Nord";
        break;
      case data === 90:
        direction = "Est";
        break;
      case data === 180:
        direction = "Sud";
        break;
      case data === 270:
        direction = "Ovest";
        break;
      case data > 0 && data < 90:
        direction = "Nord-Est";
        break;
      case data > 90 && data < 180:
        direction = "Sud-Est";
        break;
      case data > 180 && data < 270:
        direction = "Sud-Ovest";
        break;
      case data > 270 && data < 360:
        direction = "Nord-Ovest";
        break;
      default:
        direction = "sconosciuta";
    }

    return direction;
  };

  const getFetch = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&appid=e085a7d1659e09c5228310aae9216ab5`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dei dati");
        }
      })
      .then(city => {
        console.log(city);
        setCity(city);
      })
      .catch(error => {
        console.log("ERRORE", error);
      });
  };

  useEffect(() => {
    getFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!city && (
        <div className="text-center my-3">
          <Spinner animation="border" variant="success" />
        </div>
      )}
      {city && (
        <Container>
          <h1 className="text-center my-3">
            {city.name} ({city.sys.country})
          </h1>
          <Row className="justify-content-center">
            <Col xs={6}>
              <ListGroup>
                <ListGroup.Item>
                  <span className="fw-bold">temperature: </span>
                  {city.main.temp} °F
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="fw-bold">temperature max: </span>
                  {city.main.temp_max} °F
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="fw-bold">temperature min: </span>
                  {city.main.temp_min} °F
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="fw-bold">pressure: </span>
                  {city.main.pressure} Pascal
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="fw-bold">humidity: </span>
                  {city.main.humidity} g / m³
                </ListGroup.Item>
              </ListGroup>
              <ListGroup className="mt-3">
                <ListGroup.Item>
                  <span className="fw-bold">latitude: </span>
                  {city.coord.lat}°
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="fw-bold">longitude: </span>
                  {city.coord.lon}°
                </ListGroup.Item>
              </ListGroup>
              <ListGroup className="mt-3">
                <ListGroup.Item>
                  <span className="fw-bold">clouds: </span>
                  {city.clouds.all}%
                </ListGroup.Item>
              </ListGroup>
              <ListGroup className="mt-3">
                <ListGroup.Item>
                  <span className="fw-bold">sunrise: </span>
                  {date(1711107652).slice(-8)}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="fw-bold">sunset: </span>
                  {date(1711151627).slice(-8)}
                </ListGroup.Item>
              </ListGroup>
              <ListGroup className="mt-3">
                <ListGroup.Item>
                  <span className="fw-bold">description: </span>
                  {city.weather[0].description}
                </ListGroup.Item>
              </ListGroup>
              <h5 className="text-center mt-2">Wind</h5>
              <ListGroup className="mt-3">
                <ListGroup.Item>
                  <span className="fw-bold">speed: </span>
                  {city.wind.speed} Km/h
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="fw-bold">direction: </span>
                  {windDirection(city.wind.deg)}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default CityDetails;
