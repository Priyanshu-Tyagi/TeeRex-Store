import { useState, useEffect } from 'react'
import style from '../styles/home.module.css'
import Filter from '../components/home/Filter';
import ProductCard from '../components/home/ProductCard';
import Searchbar from '../components/home/Searchbar';

const Home = ({ cart, setCart }) => {

    const [data, setData] = useState([]);
    const [showFilter, setShowFilter] = useState(true);

    const getProducts = () => {
        fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`)
            .then(res => res.json())
            .then(res => setData(res))
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className={style.container}>
            {showFilter ?
                <div className={style.filterContainer}>
                    <Filter data={data} setData={setData} getProducts={getProducts} />
                </div> :
                <div className={style.filterMobileContainer} onClick={() => setShowFilter(!showFilter)} >
                    <Filter data={data} setData={setData} getProducts={getProducts} />
                    <button className={style.donebtn} onClick={() => setShowFilter(!showFilter)}>
                        Done
                    </button>
                </div>
            }
            <div className={style.products}>
                <Searchbar data={data} setData={setData} getProducts={getProducts} show={showFilter} setShow={setShowFilter} />
                <div className={style.productContainer}>
                    {data.map((i) => (
                        <ProductCard key={i.id} data={i} cart={cart} setCart={setCart} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;