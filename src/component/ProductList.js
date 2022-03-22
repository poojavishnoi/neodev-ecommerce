import './productlist.css'
import Product from './Product';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Filter from './Filter';
import { useFilter } from '../contexts/filter-context';
import getSortedProduct from '../utils/sorting';
import filteredByRating from '../utils/rating';
import priceSorting from '../utils/price'
import searchQuery from '../utils/searchQuery';

function ProductList () {
  
  const {filterState} = useFilter()
  const [productList ,setProductList] = useState([]);
  let params = useParams();
  const searcedData = searchQuery(productList, filterState.searchQuery)
  
  // const categoryData = getByCategory(sortedData, filterState.product)
  // console.log(categoryData);
  let categoryData = [];
  if (filterState.product.length > 0) {
    // sorted data should only contain matching value
    categoryData = searcedData.filter((item) => {
      return filterState.product.indexOf(item.product) > -1;
    })
  } else {
    categoryData = searcedData;
  }


  
  const fileredByRating = filteredByRating(categoryData, filterState.rating);
  const priceSortedData = priceSorting(fileredByRating, filterState.price);
  const sortedData = getSortedProduct(priceSortedData, filterState.sortBy);
  
  // console.log("***", sortedData, toRender)


  const getProductList = async(name) => {
    const data = await fetch(`http://localhost:5000/${name}`);
    const products = await data.json();
    setProductList(products)
  }

  useEffect(()=>{
    getProductList(params.type)
  }, [params.type])

  return (
    <div className='productlist_container'>
    <Filter/>
      <div className='productlist_main_container'>
        <h2> Showing All products</h2>

        <div className="product_container">
          {sortedData.map((product)=>{
            return (
            <Product rating={product.rating} data={productList} name={product.name} key={product.id} img={product.img} id={product.id} price={product.price} type={product.product}/>
            )
          }
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductList;