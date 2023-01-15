import style from '../../styles/cart.module.css'

const CartCard = ({ data, handleDelete }) => {
    return (
        <div className={style.cartCard}>
            <img width='30%' src={data.imageURL} alt={data.name} />
            <div className={style.cardDetails}>
                <div className={style.details}>
                    <h3 className={style.detailText}>{data.name}</h3>
                    <p className={style.detailText}>₹ {data.price} /-</p>
                </div>

                <div className={style.cartBtns}>
                    <button className={style.qtybtn} disabled>Qty : {data.qty}</button>
                    <button className={style.delete} onClick={()=>handleDelete(data.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartCard