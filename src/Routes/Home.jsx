import React, { useState } from 'react'
import Data from '../Components/Data'
import logo from '../Images/logo.png'
export default function Home() {
  const [shoes, setShoes]= useState(Data);
  const [activeCategory, setActiveCategory] = useState('All'); 
  const filterShoes = (cateshoes) => {
    const updatedItems = Data.filter((curElem) =>{
            return curElem.category === cateshoes;
    });
    setShoes(updatedItems);
    setActiveCategory(cateshoes); // Update active category
 }
 
  return (
    <div className="MainContainer">
      <div className="headingContainer">
        <img src={logo} alt="company logo" />
        <h1>Step into Sneaker Elegance</h1>
      </div>
      <div className="FilterContainer">
      
        <button
          className={`category-button ${activeCategory === 'Casuals' ? 'active' : ''}`}
          onClick={() => filterShoes('Casuals')}
        >
          Casuals
        </button>
        <button
          className={`category-button ${activeCategory === 'Loafers' ? 'active' : ''}`}
          onClick={() => filterShoes('Loafers')}
        >
          Loafers
        </button>
        <button
          className={`category-button ${activeCategory === 'Sports' ? 'active' : ''}`}
          onClick={() => filterShoes('Sports')}
        >
          Sports
        </button>
        <button
          className={`category-button ${activeCategory === 'All' ? 'active' : ''}`}
          onClick={() => {
            setShoes(Data);
            setActiveCategory('All');
          }}
        >
          All
        </button>
      </div>
      <div className="ShoesContainer">
        {
        shoes.map((shoe) => {
          const {id, image, name, category, price} = shoe;
          return(
            <div className="ShoesCard" key={id}>
            <img src={image} alt="" />
            <div className="description">
            <p className='ShoesName'>{name}</p>
            <p className='ShoesPrice'>{price}</p>
            </div>
            <p className='ShoesCategory'>{category}</p>
          </div>
          )
})
}
       
      </div>
    </div>
  )
}
