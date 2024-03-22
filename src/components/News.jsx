import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const News = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={10} className="text-center">
          <Card>
            <Badge bg="primary" className="position-absolute s-0 t-0">
              Tendenza
            </Badge>
            <Card.Img variant="top" src="https://w-content.meteosuper.it/2024/03/210324-sommario-da-domenica-1.jpg" />
            <Card.Body>
              <Card.Title>Meteo: settimana di Pasqua al via con il tempo molto incerto</Card.Title>
              <Card.Text>
                La settimana di Pasqua avrà inizio con un lunedì 25 tutto sommato tranquillo in attesa di un
                peggioramento in arrivo martedì 26
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={10} className="text-center">
          <Card>
            <Badge bg="success" className="position-absolute s-0 t-0">
              Ambiente
            </Badge>
            <Card.Img variant="top" src="https://w-content.meteosuper.it/2024/03/rubinetto.jpg" />
            <Card.Body>
              <Card.Title>
                Giornata mondiale dell'acqua: quella del rubinetto è buona ma solo un terzo la beve tutti i giorni
              </Card.Title>
              <Card.Text>
                Due ricerche per la Giornata mondiale dell'acqua di oggi, 22 marzo, mostrano i contrasti stridenti del
                mondo. Sono 2,2 miliardi le persone che non hanno acqua potabile sicura. Da noi, In Italia invece c'è, è
                buona, ma poi la bevono in pochi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={10} className="text-center">
          <Card>
            <Badge bg="info" className="position-absolute s-0 t-0">
              Viaggi
            </Badge>
            <Card.Img variant="top" src="https://w-content.meteosuper.it/2024/03/londra.jpg" />
            <Card.Body>
              <Card.Title>La classifica delle 10 migliori città d'Europa in cui vivere</Card.Title>
              <Card.Text>
                Resonance Consultancy ha pubblicato la classifica dell'Europe's Best Cities Report 2024: Londra al primo
                posto, ma bene anche Milano e Roma
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={10} className="text-center">
          <Card>
            <Badge bg="warning" className="position-absolute s-0 t-0">
              Spazio
            </Badge>
            <Card.Img variant="top" src="https://w-content.meteosuper.it/2024/03/Eclissi.jpeg" />
            <Card.Body>
              <Card.Title>Eclissi di Sole e Luna, arriva la loro stagione: quante ne vedremo e quando?</Card.Title>
              <Card.Text>
                La stagione delle eclissi si apre a breve. Nel giro di un paio di settimane si verificheranno ben due
                eventi diversi. Da un lato una eclissi penombrale di Luna, dall'altro si verificherà una eclissi solare
                totale
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={10} className="text-center">
          <Card>
            <Badge bg="danger" className="position-absolute s-0 t-0">
              Clima
            </Badge>
            <Card.Img variant="top" src="https://w-content.meteosuper.it/2024/03/pioggia-.jpeg" />
            <Card.Body>
              <Card.Title>Meteo weekend: maltempo per la domenica delle Palme, cosa ci attende?</Card.Title>
              <Card.Text>
                Il weekend delle Palme segna un cambio climatico: in arrivo piogge e neve con un brusco calo delle
                temperature. Ecco le previsioni meteo
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default News;
