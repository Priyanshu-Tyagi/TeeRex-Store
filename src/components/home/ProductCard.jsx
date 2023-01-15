import { useState } from 'react';
import style from '../../styles/home.module.css'

const ProductCard = ({ data, cart, setCart }) => {

    const [qty, setQty] = useState(1);
    const [show, setShow] = useState(true);

    const addtocart = (item) => {
        const existingItem = cart.find((i) => i.id === item.id);
        if (existingItem) {
            alert(`${item.name} is already added to cart.`);
        } else if (item.qty > item.quantity) {
            alert(`Requested Quantity is not available, Only ${item.quantity} is available right now.`);
        } else {
            setQty(1);
            setCart([...cart, item]);
        }
    }

    const increaseQty = () => {
        setQty(qty + 1)
    }

    const decreaseQty = () => {
        setQty(qty - 1)
    }


    return (
        <div className={style.productCard}>
            <img width='100%' src={data.imageURL} alt={data.name} />
            <div className={style.detailContainer}>
                <div className={style.details}>
                    <h3 className={style.detailText}>{data.name}</h3>
                    <p className={style.detailText}>₹ {data.price}</p>
                </div>
                {
                    show ?
                        <button className={style.addToCart} onClick={() => setShow(false)}>
                            Add To Cart
                        </button> :
                        <div className={style.qtyContainer}>
                            <button onClick={() => (decreaseQty())} disabled={qty == 1}>-</button>
                            <button>{qty}</button>
                            <button onClick={() => increaseQty()} >+</button>
                            <button onClick={() => (setShow(true), addtocart({ ...data, qty, tamount: qty * data.price }))}>Add</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default ProductCard