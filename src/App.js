import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "reactstrap";
import axios from "axios";
import "./App.css";
import rocket from "./assets/rocket.svg";
import Card from "./components/Card";
import Select from "./components/Select";
// import Search from "./components/Search";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [flight, setFlight] = useState([]);
  const [search, setSearch] = useState("");

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  //filter name
  const filterCards = flight.filter((flight) =>
    flight.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles")
      .then((res) => {
        setFlight(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto m-4">
      <Row>
        <Col md={6} />
        <Col md={4}>
          <form className="d-flex justify-content-end mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search icon-search"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
            <Input
              className="input"
              type="text"
              onChange={handleChange}
              placeholder=" Search"
            />
          </form>
        </Col>
        <Select />
        {/* <Search onChange={handleChange} /> */}
      </Row>

      <div className="d-flex justify-content-center">
        <img src={rocket} alt="rocket" width="150px" />
      </div>

      <h1 className="text-center mt-4">Space flight news</h1>
      <hr />
      {filterCards.map((flight) => {
        return (
          <Card
            key={flight.id}
            title={flight.title}
            imageUrl={flight.imageUrl}
            publishedAt={flight.publishedAt}
            newsSite={flight.newsSite}
            summary={flight.summary}
            url={flight.url}
          />
        );
      })}
      {/* {flight.map((filme) => (
        <div key={filme.id}>
          <h2> {filme.title}</h2>
          <img src={filme.imageUrl} alt={filme.title} />
          <p>{filme.publishedAt}</p>
          <p>{filme.newsSite}</p>
          <p>{filme.summary}</p>
          <a href={filme.url}>Ver mais</a>
        </div>
      ))} */}
    </div>
  );
}

export default App;
