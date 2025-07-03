import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/cards/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error loading details:", err));
  }, [id]);

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p><strong>Model:</strong> {product.model}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Details:</strong> {product.text}</p>
          <Link to="/" className="btn btn-primary me-2">Back to Products</Link>
          <button className="btn btn-warning">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
