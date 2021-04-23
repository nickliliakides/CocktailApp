import React, { FC } from 'react';
import ICocktail from './Interfaces/ICocktail';

interface IProps {
  cocktail: ICocktail
}

const CocktailItem: FC<IProps> = ({ cocktail }): JSX.Element => {
  return (
    <li className='cocktail-item'>
      <div className='cocktail-image'>
        <img
          src={cocktail.img ? cocktail.img : 'img/no-image.png'}
          width={128}
          alt={cocktail.name ? cocktail.name : 'Unknown cocktail'}
        />
      </div>
      <div className='cocktail-details w-100 p-3 d-flex flex-column'>
        <h1 className='text-center'>{cocktail.name}</h1>
        <div className='d-flex'>
          <div className='instructions'>
            <p>Instructions:</p>
            <p>{cocktail.instructions}</p>
          </div>

          <div className='ingredients'>
            <p>Ingredients:</p>
            <ul>
              {cocktail.ingredients.map(
                (ing: string, i: number): JSX.Element => (
                  <li className='ingredient-item' key={i}>
                    <svg className='ingredient-icon'>
                      <use href='img/icons.svg#icon-check'></use>
                    </svg>
                    <p>{ing}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CocktailItem;
