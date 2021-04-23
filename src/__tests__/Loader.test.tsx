import { shallow, ShallowWrapper } from 'enzyme';
import Loader from '../Loader';

let wrapper: ShallowWrapper;

describe('<Loader /> component', () => {
  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
