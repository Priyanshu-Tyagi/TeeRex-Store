import { useState, useEffect } from 'react'
import style from '../styles/home.module.css'
import Filter from '../components/home/Filter';
import ProductCard from '../components/home/ProductCard';
import Searchbar from '../components/home/Searchbar';

const Home = ({ cart, setCart }) => {

    const [data, setData] = useState([]);
    // const [cart,setCart] = useState([]);

    const getProducts = async () => {
        await fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`)
            .then(res => res.json())
            .then(res => setData(res))
    }

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        console.log(cart);
    }, [cart])

    return (
        <div className={style.container}>
            <div className={style.filterContainer}>
                <Filter />
            </div>
            <div className={style.productContainer}>
                {data.map((i) => (
                    <ProductCard key={i.id} data={i} cart={cart} setCart={setCart} />
                ))}
            </div>
        </div>
    )
}

export default Home