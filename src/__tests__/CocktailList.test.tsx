import { shallow, ShallowWrapper } from 'enzyme';
import CocktailList from '../CocktailList';
import CocktailItem from '../CocktailItem';
import Loader from '../Loader';

let wrapper: ShallowWrapper;

export const mockCocktails = [
  {
    id: '1',
    name: 'test Name 1',
    img: '/testurl1',
    instructions: 'test instructions 1',
    ingredients: ['teat ingredient 1', ' 1/2 test ingr'],
  },
  {
    id: '2',
    name: 'test Name 2',
    img: '/testurl2',
    instructions: 'test instructions 2',
    ingredients: ['teat ingredient 2', ' 1/2 test ingr'],
  },
  {
    id: '3',
    name: 'test Name 3',
    img: '/testurl3',
    instructions: 'test instructions 3',
    ingredients: ['teat ingredient 3', ' 1/2 test ingr'],
  },
];

const defaultProps = {
  cocktails: mockCocktails,
  loading: false,
};

describe('<CocktailList />', () => {
  beforeEach(() => {
    wrapper = shallow(<CocktailList {...defaultProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the right number of CocktailItem components', () => {
    expect(wrapper.find(CocktailItem).length).toEqual(mockCocktails.length);
  });
});

describe('<CocktailList /> on loading state', () => {
  beforeEach(() => {
    wrapper = shallow(<CocktailList {...defaultProps} loading={true} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render the Loader component while is on loading state', () => {
    expect(wrapper.find(Loader).length).toEqual(1);
  });
});
