import React from "react";
import { Badge } from "reactstrap";
import "./card.css"

function Card({ id, title, imageUrl, publishedAt, newsSite, summary, url }) {
  return (
    <div className="row fl-card p-4">
      <div key={id} className="fl-card__inner col-12 col-md-10 mx-auto d-flex flex-column flex-sm-row">
        <div className="p-4">
          <img className="img-fluid" src={imageUrl} alt={title} />
        </div>

        <div className="p-4">
          <h3> {title}</h3>
          <div className="d-flex justify-content-between mt-2 mb-4">
            <span>{publishedAt.slice(0, -14).split('-').reverse().join('/')}</span>
            <Badge color="warning">
              {newsSite}
            </Badge>
          </div>

          <p>{summary}</p>
          <a href={url} className="btn btn-flight text-light mt-2">
            VER MAIS
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
