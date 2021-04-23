import { shallow, ShallowWrapper } from 'enzyme';
import CocktailItem from '../CocktailItem';
import { mockCocktails } from './CocktailList.test';

let wrapper: ShallowWrapper;

describe('<CocktailItem  />', () => {
  beforeEach(() => {
    wrapper = shallow(<CocktailItem cocktail={mockCocktails[0]} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
