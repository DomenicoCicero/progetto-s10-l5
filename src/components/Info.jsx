import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Info = () => {
  const [map, setMap] = useState(null);
  const [data, setData] = useState("clouds_new");

  const getFetch = () => {
    fetch(`https://tile.openweathermap.org/map/${data}/3/0/3.png?appid=e085a7d1659e09c5228310aae9216ab5`)
      .then(response => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error("Problema nel reperimento dei dati");
        }
      })
      .then(map => {
        console.log(map);
        const url = URL.createObjectURL(map);
        setMap(url);
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
    <Container>
      <Row>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="Clouds" title="Clouds" onClick={() => setData("clouds_new")}>
            <Row className="justify-content-center">
              <Col xs={8} className="text-center">
                <img src={map} alt="map" className="border border-secondary" />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Precipitation" title="Precipitation" onClick={() => setData("precipitation_new")}>
            <Row className="justify-content-center">
              <Col xs={8} className="text-center">
                <img src={map} alt="map" className="border border-secondary" />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Sea level pressure" title="Sea level pressure" onClick={() => setData("pressure_new")}>
            <Row className="justify-content-center">
              <Col xs={8} className="text-center">
                <img src={map} alt="map" className="border border-secondary" />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Wind speed" title="Wind speed" onClick={() => setData("wind_new")}>
            <Row className="justify-content-center">
              <Col xs={8} className="text-center">
                <img src={map} alt="map" className="border border-secondary" />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Temperature" title="Temperature" onClick={() => setData("temp_new")}>
            <Row className="justify-content-center">
              <Col xs={8} className="text-center">
                <img src={map} alt="map" className="border border-secondary" />
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
};

export default Info;
