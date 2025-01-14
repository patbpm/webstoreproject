import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, setShipping } from "../store/slices/cartSlice";
import Button from '../components/common/Button';

const Cart = () => {
    const {items, total, shipping} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [showHelp, setShowHelp] = React.useState(false);

    const shippingRates = {
        standard:5,
        express:15,
        overnight:25
    };

    return (
        <div className="container mx-auto px-4 py-8">
           <h1 className="text-2xl font-bold mb-6">Your Cart</h1> 

           {items.length ===0? (
              <p>Your cart is empty</p>
           ):(
             <>
                {items.map(item => (
                    <div key={item.id} className="flex items-center justify-between border-b py-4">
                         <div className="flex items-center">
                            <img
                                src= {item.image}
                                alt = {item.name}
                                className="w-16 h-16 object-covert rounded"
                            />
                            <div className="ml-4">
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-gray-600">{item.price}</p>
                            </div>

                            <div className="flex items-center">
                                <input 
                                  type="number"
                                  min="1"
                                  value = {value.quantity}
                                  onChange = {(e) => dispatch(updateQuantity ({
                                    id: item.id,
                                    quantity: parseInt(e.target.value)
                                  }))}
                                  className="w-16 px-2 py-1 border rounded"
                                />

                                <Button 
                                    variant = 'danger'
                                    className = 'ml-4'
                                    onclick = {()=> dispatch(removeFromCart(item.id))}
                                >
                                    Remove
                                </Button>
                            </div>
                         </div>   
                    </div>
                ))}

                <div className="mt-8">
                    <h3 className="font-semibold mb-4">Shipping Method</h3>
                    <select 
                        className="w-full p-2 border rounded"
                        value={shipping}
                        onChange={(e)=> dispatch(setShipping(e.target.value))}
                    >
                        <option value = "standard">Standard Shipping - $5</option>
                        <option value = "express">Express Shipping - $15</option>
                        <option value = "overnight">Overnight Shipping - $25</option>
                    </select>

                    <button
                        onclick = {()=> setShowHelp(!showHelp)}
                        className="mt-2 text-blue-500 text-sm"
                    >
                         Need help with shipping?
                    </button>

                    {showHelp && (
                        <div className="mt-2 p-4 bg-blue-50 rounded">
                            <h4 className="font-semibold">Shipping Information</h4>
                            <ul className="mt-2 text-sm">
                                <li>Standard: 5-7 business days</li>
                                <li>Express: 2-3 business days</li>
                                <li>Overnight: Next business days</li>
                            </ul>
                        </div>

                    )}
                </div>

                <div className="mt-8">
                    <div className="flex justify-between py-2">
                        <span>Subtotal :</span>
                        <span>{total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span>Shipping :</span>
                        <span>{shippingRates[shipping].toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span>Total :</span>
                        <span>${(total + shippingRates[shipping]).toFixed(2)}</span>
                    </div>

                    <Button
                        className="w-full mt-4"
                    >
                        Proceed to Checkout
                    </Button>

                </div>
             </>
           )}
        </div>
    );
};

export default Cart;