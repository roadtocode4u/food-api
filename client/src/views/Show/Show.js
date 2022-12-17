import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "./Show.css"

import FoodItemCard from '../../component/FoodItemCard/FoodItemCard'

function Show() {
  const [foodItems, setFoodItems] = useState([])

  async function loadData(){
    // load data from API
    const response = await axios.get('/all-food-items')
    setFoodItems(response.data.data)
  }

  useEffect(()=>{
    loadData()
  }, [])

  return (
    <div>
      <h1>Show All Food Items</h1>
      {
        foodItems.map((item, index)=>{
            return (
            <FoodItemCard
              id={item.id}
              title={item.title}
              category={item.category}
              price={item.price}
              key={index}
              />)
        })
      }
    </div>
  )
}

export default Show
