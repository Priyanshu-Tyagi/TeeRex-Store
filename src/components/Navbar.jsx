import style from '../styles/navbar.module.css'
import shoppingcart from '../icons/shoppingcart.png'

const Navbar = ({route}) => {


    return (
        <div className={style.navcontainer}>
            <p className={style.logo} onClick={()=>route('home')}>
                TeeRex-Store
            </p>
            <div className={style.contents}>
                <p className={style.navhead} onClick={()=>route('home')}>Products</p>
                <p className={style.cart} onClick={()=>route('cart')}>
                    <img className={style.carticon} src={shoppingcart} alt='shopping cart' />
                </p>
            </div>
        </div>
    )
}

export default Navbar