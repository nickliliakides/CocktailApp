import { FC } from 'react';
import ICocktail from './Interfaces/ICocktail';
import './CocktailList.styles.scss';
import CocktailItem from './CocktailItem';
import Loader from './Loader';

interface IProps {
  cocktails: ICocktail[]
  loading: boolean
}

const CocktailList: FC<IProps> = ({ cocktails, loading }): JSX.Element => {
  return loading ? (
    <Loader />
  ) : cocktails.length ? (
    <div className='list-container'>
      <ul>
        {cocktails &&
          cocktails?.map((cocktail: ICocktail) => (
            <CocktailItem key={cocktail.id} cocktail={cocktail} />
          ))}
      </ul>
    </div>
  ) : <div style={{ fontSize: '3rem'}} className='text-center'>There are no results to display!</div>;
};

export default CocktailList;
