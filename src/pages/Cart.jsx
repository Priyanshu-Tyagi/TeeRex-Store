import CartCard from '../components/cart/CartCard'
import style from '../styles/cart.module.css'

const Cart = ({ cart }) => {

    const getTotalAmount = (items) => {
        return items.reduce((total, item) => total + (item.price * item.qty), 0);
      };

    return (
        <div className={style.container}>
            <div className={style.cartContainer}>
                {cart.map((i) => (
                    <CartCard key={i.name} data={i} />
                ))}
            </div>
            <div className={style.totalContainer}>
                <p>Total Amount : <span>₹ {getTotalAmount(cart)} /-</span></p>
            </div>
        </div>
    )
}

export default Cart