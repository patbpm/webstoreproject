import react from "react";
import Button from '../common/Button';
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    
    return (
        <div className="border rounded-lg p-4 shadow-sm">
            <img
                src= {product.image}
                alt = {product.name}
                className="w-full h-48 object-covert rounded mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <Button
              onClick = {()=> dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
        </div>
    )
}

export default ProductCard; 