import { useEffect } from 'react';
import { useState } from 'react';
import style from '../../styles/home.module.css'

const Filter = ({ data, setData, getProducts }) => {

  const [filters, setFilters] = useState({
    type: [],
    color: [],
    gender: [],
    price: []
  });

  const handleFilterChange = (filterType, value) => {
    if (filters[filterType].includes(value)) {
      getProducts();
      setFilters({
        ...filters,
        [filterType]: filters[filterType].filter(item => item !== value)
      });
    } else {
      setFilters({
        ...filters,
        [filterType]: [...filters[filterType], value]
      });
    }

  };

  useEffect(() => {
    setData(filteredData)
  }, [filters])
  
  const filteredData = data.filter(item => {
    if (filters.type.length > 0 && !filters.type.includes(item.type)) {
      return false;
    }
    if (filters.color.length > 0 && !filters.color.includes(item.color)) {
      return false;
    }
    if (filters.gender.length > 0 && !filters.gender.includes(item.gender)) {
      return false;
    }
    if (filters.price.length > 0 && !(item.price == filters.price)) {
      return false;
    }
    return true;
  });



  return (
    <div className={style.filters}>
      <fieldset className={style.fieldset}>
        <legend className={style.legend} style={{ textAlign: 'center' }}>Colour</legend>
        <div className={style.checkboxContainer}>
          <input className={style.filterInput} type="checkbox" name="Red" value="Red" onChange={e => handleFilterChange("color", e.target.value)} />
          <label className={style.filterLabel} htmlFor="Red">Red</label>
        </div>
        <div className={style.checkboxContainer}>
          <input className={style.filterInput} type="checkbox" name="Blue" value="Blue" onChange={e => handleFilterChange("color", e.target.value)} />
          <label className={style.filterLabel} htmlFor="Blue">Blue</label>
        </div>
        <div className={style.checkboxContainer}>
          <input className={style.filterInput} type="checkbox" name="Black" value="Black" onChange={e => handleFilterChange("color", e.target.value)} />
          <label className={style.filterLabel} htmlFor="Black">Black</label>
        </div>
      </fieldset>
      <fieldset className={style.fieldset}>
        <legend className={style.legend}>Gender</legend>
        <div className={style.checkboxContainer}>
          <input className={style.filterInput} type="checkbox" name="Male" value="Men" onChange={e => handleFilterChange("gender", e.target.value)} />
          <label className={style.filterLabel} htmlFor="Male">Male</label>
        </div>
        <div className={style.checkboxContainer}>
          <input className={style.filterInput} type="checkbox" name="Female" value="Women" onChange={e => handleFilterChange("gender", e.target.value)} />
          <label className={style.filterLabel} htmlFor="Female">Female</label>
        </div>
      </fieldset>
      <fieldset className={style.fieldset}>
        <legend className={style.legend}>Price</legend>
        <div className={style.checkboxContainer}>
          <input className={style.filterInput} type="checkbox" name="250" value={250} onChange={e => handleFilterChange("price", e.target.value)} />
          <label className={style.filterLabel} htmlFor="250">₹250</label>
        </div>
        <div className={style.checkboxContainer}>
          <input className={style.filterInput} type="checkbox" name="300" value={300} onChange={e => handleFilterChange("price", e.target.value)} />
          <label className={style.filterLabel} htmlFor="300">₹300</label>
        </div>
        <div className={style.checkboxContainer}>
          <input className={style.filterInput} type="checkbox" name="350" value={350} onChange={e => handleFilterChange("price", e.target.value)} />
          <label className={style.filterLabel} htmlFor="350">₹350</label>
        </div>
        <div className={style.checkboxContainer}>
          <input className={style.filterInput} type="checkbox" name="500" value={500} onChange={e => handleFilterChange("price", e.target.value)} />
          <label className={style.filterLabel} htmlFor="500">₹500</label>
        </div>
      </fieldset>
      <fieldset className={style.fieldset}>
        <legend className={style.legend}>Type</legend>
        <div className={style.checkboxContainer}>
          <input className={style.filterInput} type="checkbox" name="hoodie" value="hoodie" onChange={e => handleFilterChange("type", e.target.value)} />
          <label className={style.filterLabel} htmlFor="hoodie">Hoodie</label>
        </div>
        <div className={style.checkboxContainer}>
          <input className={style.filterInput} type="checkbox" name="polo" value="polo" onChange={e => handleFilterChange("type", e.target.value)} />
          <label className={style.filterLabel} htmlFor="polo">Polo</label>
        </div>
        <div className={style.checkboxContainer}>
          <input className={style.filterInput} type="checkbox" name="basic" value="basic" onChange={e => handleFilterChange("type", e.target.value)} />
          <label className={style.filterLabel} htmlFor="basic">Basic</label>
        </div>
      </fieldset>
    </div>
  )
}

export default Filter