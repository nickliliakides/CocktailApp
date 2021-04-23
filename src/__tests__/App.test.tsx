import { shallow, ShallowWrapper } from 'enzyme';
import App from '../App';
import Search from '../Search';
import CocktailList from '../CocktailList';

let wrapper: ShallowWrapper;

describe('<App />', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Search component', () => {
    expect(wrapper.find(Search).length).toEqual(1);
  });

  it('should render the CocktailList component', () => {
    expect(wrapper.find(CocktailList).length).toEqual(1);
  });
});
