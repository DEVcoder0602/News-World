import React from "react";
export default function NewsItem(props) {
  let {title , description , imageUrl} = props;
  return (
    <div className="my-3">
      <div
        className="card"
        style={{ backgroundColor: "lightblue", width: "18rem" }}
      >
        <img
          className="card-img-top"
          src={imageUrl}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-sm btn-primary">
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
}
