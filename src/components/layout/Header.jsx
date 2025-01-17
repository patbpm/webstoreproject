import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from 'lucide-react';

const Header = () => {
    const { user } = useSelector(state => state.auth);
    const { items } = useSelector(state => state.cart);
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="container-fluid px-4 py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/" className="fs-4 fw-bold text-decoration-none text-dark">WebStore</Link>

                    <nav className={`d-none d-md-flex align-items-center ${isOpen ? 'd-block' : 'd-none'}`}>
                        <Link to="/products" className="text-muted me-3 hover-link">Products</Link>
                        <Link to="/cart" className="text-muted me-3 hover-link">
                            Cart ({items.length})
                        </Link>
                        {user ? (
                            <span className="text-muted">Welcome, {user.username}</span>
                        ) : (
                            <Link to="/login" className="text-muted hover-link">Login</Link>
                        )}
                    </nav>

                    <button className="d-md-none" onClick={() => setIsOpen(!isOpen)}>
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

                {/* Mobile menu */}
                <div className={`d-md-none ${isOpen ? 'd-block' : 'd-none'} mt-3`}>
                    <Link to="/products" className="d-block text-muted py-2 hover-link">Products</Link>
                    <Link to="/cart" className="d-block text-muted py-2 hover-link">
                        Cart ({items.length})
                    </Link>
                    {user ? (
                        <span className="d-block text-muted py-2">Welcome, {user.username}</span>
                    ) : (
                        <Link to="/login" className="d-block text-muted py-2 hover-link">Login</Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
