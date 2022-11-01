import React from 'react';
import './CategoryCard.css';
import CategoryCardItem from './CategoryCardItem';

function Category() {
  return (
    <div className='ccards'>
        <h1>Choose a Category</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CategoryCardItem
              src='images/myth.jpg'
              title= 'MYTHOLOGY STORIES'
              label='Mythology'
              path='/AllStories'
            />
            <CategoryCardItem
              src='images/temple.jpg'
              title= 'TEMPLES'
              label = 'Temples'
              path='/AllTemples'
            />
            <CategoryCardItem
              src='images/festival.jpeg'
              title= 'FESTIVALS'
              label = 'Festivals'
              path='/AllFestivals'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Category;
