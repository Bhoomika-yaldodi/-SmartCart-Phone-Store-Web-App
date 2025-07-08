import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading cards:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4" style={{ fontFamily: "cursive", fontWeight: "bold", color: "#2A2A72" }}>Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 shadow">
              <img src={product.image} className="card-img-top p-3" alt={product.title} />
              <div className="card-body text-center">
                <h6 className="card-title">{product.title}</h6>
                <h6 style={{ color: "blue", fontWeight: "bold" }}>${product.price}</h6>
                <Link to={`/details/${product.id}`} className="btn btn-primary mt-2">View</Link>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
