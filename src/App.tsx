import React, { FC, useState } from 'react';
import axios from 'axios';
import './App.styles.scss';
import ICocktail from './Interfaces/ICocktail';
import CocktailList from './CocktailList';
import Search from './Search';

const App: FC = (): JSX.Element => {
  const [searchField, setSearchField] = useState<string>('');
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiHost = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

  const searchCocktails = async (url: string): Promise<any> => {
    try {
      setLoading(true);
      const {
        data: { drinks },
      } = await axios.get(url);
      if (drinks) {
        const newDrinks = drinks.filter((d: any, i: number): boolean => i < 5);
        const cocktails = newDrinks?.map((c: any) => {
          const ingredients: string[] = [];
          for (let i = 1; i < 16; i++) {
            if (c[`strIngredient${i}`]) {
              let ingredient = '';
              if (c[`strMeasure${i}`])
                ingredient = `${c[`strMeasure${i}`]}${c[`strIngredient${i}`]}`;
              else ingredient = `${c[`strIngredient${i}`]}`;
              ingredients.push(ingredient);
            }
          }
          return {
            id: c.idDrink,
            name: c.strDrink,
            img: c.strDrinkThumb,
            instructions: c.strInstructions,
            ingredients,
          };
        });
        setCocktails(cocktails);
        setLoading(false);
      } else setCocktails([]);
    } catch (error) {
      alert(
        `Error: ${error.response.status} - ${
          error.response.statusText
            ? error.response.statusText
            : 'Something went wrong!'
        }`
      );
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    let url: string;
    if (searchField.trim().length) {
      url = `${apiHost}?s=${searchField.trim()}`;
      searchCocktails(url);
    } else {
      alert('Please enter a valid string');
    }
  };

  return (
    <>
      <Search handleChange={handleChange} handleSubmit={handleSubmit} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </>
  );
};

export default App;
