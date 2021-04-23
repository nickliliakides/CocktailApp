import React, { FC } from 'react';

interface IProps {
  handleSubmit: (e: React.FormEvent<HTMLElement>) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: FC<IProps> = ({ handleSubmit, handleChange }): JSX.Element => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='search'>Find a cocktail by name</label>
        <div className='search'>
          <input
            className='form-control'
            id='search'
            name='search'
            type='search'
            placeholder='Please enter a cocktail name...'
            onChange={handleChange}
          />
          <button type='submit' className='btn btn-primary btn-lg'>
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
