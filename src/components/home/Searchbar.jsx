import { useState } from 'react';
import style from '../../styles/home.module.css'
import filter from '../../icons/filter.png'

const Searchbar = ({ data, setData, getProducts, show, setShow }) => {

  const [searchText, setSearchText] = useState('');

  const searchfunc = (data, text) => {
    return data.filter(item => {
      return (
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.color.toLowerCase().includes(text.toLowerCase()) ||
        item.type.toLowerCase().includes(text.toLowerCase())
      );
    });
  };

  const handleChange = (e) => {
    e.target.value==''?getProducts(): 
    setSearchText(e.target.value)
  }

  return (
    <div className={style.searchContainer}>
      <input type="text" name="Search" id="Search" className={style.Searchbar} onChange={(e) => handleChange(e)} />
      <button className={style.searchBtn} onClick={() => setData(searchfunc(data, searchText))}>
        Search
      </button>
      <button className={style.filterbtn} onClick={()=>setShow(!show)}>
        <img src={filter} alt="filtericon" />
      </button>
    </div>
  )
}

export default Searchbar