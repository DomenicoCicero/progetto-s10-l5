import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const SingleCard = props => {
  const [city, setCity] = useState(null);

  const getFetch = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.cityProp}&appid=e085a7d1659e09c5228310aae9216ab5`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dei dati");
        }
      })
      .then(city => {
        setCity(city);
      })
      .catch(error => {
        console.log("ERRORE", error);
      });
  };

  useEffect(() => {
    getFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cityProp]);

  return (
    <>
      {!city && (
        <div className="text-center my-3">
          <Spinner animation="border" variant="success" />
        </div>
      )}
      {city && (
        <Link to={`/city/${city.name}`} className="text-decoration-none text-white nav-link">
          <div className="d-flex align-items-center border border border-primary justify-content-between bg-primary my-1">
            <h3 className="text-white ms-2 me-1">{city.name}</h3>
            <div>
              <span className="me-5 fw-semibold text-white">{city.main.temp}°F</span>
              <span className="me-2 text-white">min/max:</span>
              <span className="me-2 fw-semibold text-white">
                {city.main.temp_min}°F/{city.main.temp_max}°F
              </span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default SingleCard;
