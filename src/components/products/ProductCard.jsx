import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { ArrowRight, Star, Truck, Shield, Clock } from 'lucide-react';
import Button from '../common/Button';

// Star component to represent the rating
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card shadow-sm border-light rounded-3 p-3">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top rounded-3 mb-4"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title text-truncate" style={{ maxWidth: '250px', margin: '0 auto' }}>
          {product.name}
        </h5>
        <p className="card-text text-muted mb-3">${product.price}</p>

        {/* Rating and Review Section */}
        <div className="d-flex justify-content-center align-items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4"
              fill={i < product.rating ? "#FFD700" : "none"}
              stroke={i < product.rating ? "#FFD700" : "#CBD5E0"}
            />
          ))}
          <span className="ms-2 text-sm text-muted">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Additional product info with icons */}
        <div className="d-flex justify-content-around mb-4">
          <div className="d-flex align-items-center">
            <Truck className="me-2" size={18} />
            <span className="text-muted">Standard Shipping</span>
          </div>
          <div className="d-flex align-items-center">
            <Shield className="me-2" size={18} />
            <span className="text-muted">Secure Payment</span>
          </div>
          <div className="d-flex align-items-center">
            <Clock className="me-2" size={18} />
            <span className="text-muted">24/7 Support</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => dispatch(addToCart(product))}
          className="btn btn-primary w-100"
        >
          Add to Cart <ArrowRight className="ms-2" size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
