import React from "react";
import NewsItem from "./NewsItem";

export default function News() {
  return (
    <div className="container my-3">
      <h2>News World - Top Headlines</h2>
      <div className="row">
        <div className="col-md-4">
          <NewsItem
            title="myTitle"
            description="myDesc"
            imageUrl="https://cdn.cnn.com/cnnnext/dam/assets/220511143355-tonga-volcanic-eruption-screengrab-super-tease.jpg"
          />
        </div>
        <div className="col-md-4">
          <NewsItem title="myTitle" description="myDesc" />
        </div>
        <div className="col-md-4">
          <NewsItem title="myTitle" description="myDesc" />
        </div>
      </div>
    </div>
  );
}
