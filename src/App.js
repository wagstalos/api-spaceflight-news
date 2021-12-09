import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "reactstrap";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import Select from "./components/Select";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [flight, setFlight] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //filter name
  const filterCards = flight.filter((flight) =>
    flight.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    let baseURL = "https://api.spaceflightnewsapi.net/v3/articles?_limit=10";
    axios
      .get(baseURL)
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
      </Row>

      <Header />

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
    </div>
  );
}
