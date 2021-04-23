import { FC } from 'react';
import './Loader.styles.scss';

const Loader: FC = (): JSX.Element => {
  return (
    <div className='loader'>
      <svg>
        <use href='img/icons.svg#icon-cw'></use>
      </svg>
    </div>
  );
};

export default Loader;
