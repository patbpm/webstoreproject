import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {Menu} from 'lucide-react'

const Header = ()=> {
    const {user} = useSelector(state => state.auth);
    const {items} = useSelector(state => state.cart);
    cont [isOpen. setIsOpen] = React.useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="conatainer mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold">WebStore</Link>

                    <nav className="hidden md:flex items-center space-x-4">
                        <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
                        <Link to="/cart" className="text-gray-600 hover:text-gray-900">
                            Cart({items.length})
                        </Link>
                        {user? (
                            <span className="text-gray-600">Welvome, {user.username}</span>
                        ):(
                            <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
                        )
                        
                        }
                    </nav>
                    <button className="md:hidden" onClick={()=> setIsOpen(!isOpen)}>
                        <Menu className="h-6 w-6"/>
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header;