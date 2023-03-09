import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const History = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2023/api/v1/checker")
      .then((art) => {
        setArticles(art.data);
      })
      .catch((err) => {
        console.log("[ERROR]", err);
      });
  }, []);

  return (
    <div className="row row-cols-md-2 g-3">
      {articles.map((article) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">
                created: {article.build_date.slice(0, 10)}
              </p>
              <Link to={"/workpage/" + article._id} className="btn btn-primary">
                More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
