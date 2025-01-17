import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Clock } from 'lucide-react';
import { featuredProducts } from "../assets/data/products";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary text-black py-16">
        <div className="container text-center px-4">
          <h1 className="display-4 fw-bold mb-4">
            Welcome to WebStore
          </h1>
          <p className="lead mb-5">
            Discover amazing products at unbeatable prices. Shop the latest tech gadgets and accessories.
          </p>
          <Link 
            to="/products" 
            className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow-lg fw-semibold"
          >
            Shop Now <ArrowRight className="ms-2" />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center text-4xl font-bold mb-8">Featured Products</h2>
          <div className="row g-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col-12 col-md-4">
                <div className="card shadow-lg border-light rounded-3">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="card-img-top rounded-3"
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-semibold">{product.name}</h5>
                    <p className="card-text text-muted">${product.price}</p>
                    <div className="d-flex justify-content-center align-items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className="w-4 h-4"
                          fill={i < product.rating ? "#FFD700" : "none"}
                          stroke={i < product.rating ? "#FFD700" : "#CBD5E0"}
                        />
                      ))}
                      <span className="ms-2 text-muted small">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-light py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
          <div className="row text-center">
            <div className="col-12 col-md-4">
              <div className="feature-icon mb-4">
                <div className="bg-primary text-white rounded-circle p-4 mb-3">
                  <Truck className="w-8 h-8" />
                </div>
                <h4 className="fw-semibold mb-2">Standard Shipping</h4>
                <p className="text-muted">On orders over $5</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="feature-icon mb-4">
                <div className="bg-primary text-white rounded-circle p-4 mb-3">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="fw-semibold mb-2">Secure Payments</h4>
                <p className="text-muted">100% secure checkout</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="feature-icon mb-4">
                <div className="bg-primary text-white rounded-circle p-4 mb-3">
                  <Clock className="w-8 h-8" />
                </div>
                <h4 className="fw-semibold mb-2">Fast Delivery</h4>
                <p className="text-muted">2-3 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
