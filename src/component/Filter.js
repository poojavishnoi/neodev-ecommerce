import React, {useState} from 'react'
import Rating from './Rating'
import './filter.css'
import { useFilter } from '../contexts/filter-context';

function Filter() {
  const [rate, setRate] = useState(3);
  const { filterState, filterDispatch} = useFilter();

  return (
    <div className='filter_Section'>
    <h2>Filters</h2>

    <div className='filter'>
      <h3>Price: {filterState.price}</h3>
      <input type="range" min="400" max="2000" value={filterState.price} className='slider' step="100" onChange={(e) => filterDispatch({type: "PRICE", payload: e.target.value})}/>
    </div>

    <div className='filter'>
      <h3>Category</h3>
      <input type="checkbox" id='tshirt' checked={filterState.product.indexOf("Tshirt") > -1} onChange={() => filterDispatch({type: 'CATEGORY', payload: "Tshirt"})}/><span>Tshirt</span><br/>
      <input type="checkbox" id='shirt' checked={filterState.product.indexOf("Shirt") > -1} onChange={() => filterDispatch({type: 'CATEGORY', payload: "Shirt"})}/><span>Shirt</span><br/>
      <input type="checkbox" id='dress' checked={filterState.product.indexOf("Dress") > -1} onChange={() => filterDispatch({type: 'CATEGORY', payload: "Dress"})}/><span>Dress</span>
    </div>

    <div className='filter'>
      <h3>Rating: </h3>
      <Rating rating={rate} onClick={(i)=> {
        setRate(i+1);
        filterDispatch({type:"RATING", payload: i+1})} }
        />
      
   </div>

   <div className='filter'>
      <h3>Sort by</h3>
      <input type="radio" name='sort' checked={filterState.sortBy && filterState.sortBy === "LOW_TO_HIGH"} onChange={() => filterDispatch({type:"SORT", payload: "LOW_TO_HIGH"})}/><span>Price - Low to High</span><br/>
      <input type="radio" name='sort' checked={filterState.sortBy && filterState.sortBy === "HIGH_TO_LOW"}   onChange={() => filterDispatch({type:"SORT", payload: "HIGH_TO_LOW"})}/><span>Price - High to Low</span><br/>
   </div>

   <div className='filter'>
   <button className='secondary_solid_btn clear_btn btn' onClick={() => filterDispatch({type: "RESET"})}>Clear Filter</button>
   </div>
   
  </div>
  )
}

export default Filter