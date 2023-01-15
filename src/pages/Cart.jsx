import CartCard from '../components/cart/CartCard'
import style from '../styles/cart.module.css'

const Cart = ({ cart, setCart }) => {

    const getTotalAmount = (items) => {
        return items.reduce((total, item) => total + (item.price * item.qty), 0);
    };

    const handleDelete = id => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <div className={style.container}>
            <div className={style.cartContainer}>
                {cart.map((i) => (
                    <CartCard key={i.name} data={i} handleDelete={handleDelete}/>
                ))}
            </div>
            <div className={style.totalContainer}>
                <p>Total Amount : <span>₹ {getTotalAmount(cart)} /-</span></p>
            </div>
        </div>
    )
}

export default Cart