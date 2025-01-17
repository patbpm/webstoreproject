import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, setShipping } from "../store/slices/cartSlice";
import Button from '../components/common/Button';

const Cart = () => {
    const {items, total, shipping} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [showHelp, setShowHelp] = React.useState(false);

    const shippingRates = {
        standard: 5,
        express: 15,
        overnight: 25
    };

    return (
        <div className="container mx-auto px-4 py-5">
            <h1 className="text-center mb-4 text-primary">Your Cart</h1>

            {items.length === 0 ? (
                <div className="text-center text-muted">Your cart is empty</div>
            ) : (
                <>
                    <div className="mb-4">
                        {items.map(item => (
                            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-3">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="img-fluid rounded"
                                        style={{ width: '60px', height: '60px' }}
                                    />
                                    <div className="ms-3">
                                        <h5 className="fw-bold">{item.name}</h5>
                                        <p className="text-muted">${item.price}</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center">
                                    <input 
                                        type="number"
                                        min="1"
                                        onChange={(e) => dispatch(updateQuantity({
                                            id: item.id,
                                            quantity: parseInt(e.target.value)
                                        }))}
                                        className="form-control w-25"
                                        value={item.quantity || 1}
                                    />
                                    <Button
                                        variant="danger"
                                        className="ms-3"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mb-4">
                        <h5 className="fw-semibold mb-3">Shipping Method</h5>
                        <select
                            className="form-select"
                            value={shipping}
                            onChange={(e) => dispatch(setShipping(e.target.value))}
                        >
                            <option value="standard">Standard Shipping - $5</option>
                            <option value="express">Express Shipping - $15</option>
                            <option value="overnight">Overnight Shipping - $25</option>
                        </select>

                        <button
                            onClick={() => setShowHelp(!showHelp)}
                            className="btn btn-link p-0 mt-2 text-decoration-none"
                        >
                            Need help with shipping?
                        </button>

                        {showHelp && (
                            <div className="mt-3 p-3 bg-light rounded">
                                <h6 className="fw-bold">Shipping Information</h6>
                                <ul className="list-unstyled text-muted">
                                    <li>Standard: 5-7 business days</li>
                                    <li>Express: 2-3 business days</li>
                                    <li>Overnight: Next business day</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="mt-4">
                        <div className="d-flex justify-content-between py-2">
                            <span className="fw-semibold">Subtotal:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between py-2">
                            <span className="fw-semibold">Shipping:</span>
                            <span>${shippingRates[shipping].toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between py-2">
                            <span className="fw-semibold">Total:</span>
                            <span>${(total + shippingRates[shipping]).toFixed(2)}</span>
                        </div>

                        <Button className="w-100 mt-4">
                            Proceed to Checkout
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
